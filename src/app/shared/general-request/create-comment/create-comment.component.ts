import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { General } from '../../interfaces/general';

import { GeneralRequest } from '../request';

import { Comment } from '../comment';

import { GeneralRequestService } from '../general-request.service';

import { GeneralRequestFormService } from '../general-request-form.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

@Component({

  'selector' : 'app-create-comment',

  'templateUrl' : './create-comment.component.html',

  'styleUrls' : ['./create-comment.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class CreateCommentComponent implements OnInit {


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

  public error : General | null | boolean = false;

  public commentForm : FormGroup;

  private entrySlug : string = '';

  public formSubmitted : boolean = false;

  public fip : string = 'block';

  ngOnInit() : void {

    this.grs.$systemType = this.systemType;

    this.grs.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { let $e = params.get('entry');

            return this.grs.addComment($e);  })
        )
          .subscribe(($entry : General) => {

              if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

              this.entry = $entry.$data;

              this.entrySlug = this.entry.slug;

              this.commentForm = this.grfs.$entryCommentForm(); });
  }

  public addCommentToEntry($comment : Comment) : any {

    this.error = null;

    this.fip = 'none';

    this.formSubmitted = true;

    this.grs.$addComment(this.entrySlug , $comment)

      .subscribe(($entry : General) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and comment is not added to ${this.systemType} Entry.`);

          return this.error = Object.assign({'resource' : `${this.systemType} Comment Entry`} , this.ems.message);  }

        if ($entry && $entry.updated) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and comment is added to ${this.systemType} Entry.`);

          return this.$entryChanges($entry.$data);  }  });
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['request' , `${this.link}` , 'entries']);  } , 5000) 
  }

  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

  get isFormValid() : boolean {

    return this.commentForm.valid;
  }

  get text() : FormControl {

    return this.commentForm.get('text') as FormControl;
  }

  public removeNotification() : void {

     this.ns.removeNotification();
  }

}
