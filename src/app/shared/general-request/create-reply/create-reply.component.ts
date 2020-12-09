import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { General } from '../../interfaces/general';

import { GeneralRequest } from '../request';

import { Reply } from '../reply';

import { GeneralRequestService } from '../general-request.service';

import { GeneralRequestFormService } from '../general-request-form.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

@Component({

  'selector' : 'app-create-reply',

  'templateUrl' : './create-reply.component.html',

  'styleUrls' : ['./create-reply.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class CreateReplyComponent implements OnInit {

 constructor(public router : Router , private route : ActivatedRoute , public grs : GeneralRequestService , 

              public ns : NotificationService , public grfs : GeneralRequestFormService , public ems : ErrorMessagesService) {

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public entry : GeneralRequest;

  public comment : General;

  public error : General | null | boolean = false;

  public replyForm : FormGroup;

  private entrySlug : string = '';

  public formSubmitted : boolean = false;

  public fip : string = 'block';

  ngOnInit() : void {

    this.grs.$systemType = this.systemType;

    this.grs.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { let $e = params.get('entry') , $c = params.get('comment');

            return this.grs.addReply($e , $c);  })
        )
          .subscribe(($entry : General) => {

              if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

              this.entry = $entry.$data[this.viewWord];

              this.comment = $entry.$data.comment;

              this.entrySlug = this.entry.slug;

              this.replyForm = this.grfs.$entryReplyForm();

              let authorName = this.comment.author.firstName + ' ' + this.comment.author.lastName;

              this.replyForm.patchValue({'commentAuthorName' : authorName });  });
  }


  public addReplyToEntry($reply : General) : any {

    this.error = null;

    this.fip = 'none';

    this.formSubmitted = true;

    this.grs.$addReply(this.entrySlug , this.comment.slug , $reply)

      .subscribe(($entry : General) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and reply is not added to ${this.systemType} Entry.`);

          return this.error = Object.assign({'resource' : `${this.systemType} Reply Entry`} , this.ems.message);  }

        if ($entry && $entry.updated) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and reply is added to ${this.systemType} Entry.`);

          return this.$entryChanges($entry.$data);  }  });
  }

  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

  get isFormValid() : boolean {

    return this.replyForm.valid;
  }

  get text() : FormControl {

    return this.replyForm.get('text') as FormControl;
  }

  get commentAuthorName() : FormControl {

    return this.replyForm.get('commentAuthorName') as FormControl;
  }

   public removeNotification() : void {

     this.ns.removeNotification();
   }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['request' , this.link , 'entries']);  } , 5000) 
  }

}
