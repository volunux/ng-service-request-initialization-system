import { Component , Input , OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap , Router } from '@angular/router';

import { FormBuilder , FormGroup , FormControl } from '@angular/forms';

import { switchMap } from 'rxjs/operators';

import { GeneralConversation } from '../general-conversation';

import { General } from '../../interfaces/general';

import { GeneralConversationService } from '../general-conversation.service';

import { GeneralConversationFormService } from '../general-conversation-form.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

@Component({
  
  'selector' : 'app-general-conversation-entry-delete',

  'templateUrl' : './general-conversation-entry-delete.component.html',
  
  'styleUrls' : ['./general-conversation-entry-delete.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService]

})

export class GeneralConversationEntryDeleteComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private ems : ErrorMessagesService ,

              private gcs : GeneralConversationService , private gcfs : GeneralConversationFormService , private ns : NotificationService) { 

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input('system-guideline') public systemGuideline : string;

  @Input('control-filters') public controlFilters : string[];

  @Input('controls-disabled') public controlsDisabled : string[];

  @Input('no-edit') public noEdit : boolean;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  private entryIdx : string = '';

  public fip : string = 'block';

  public submission : boolean = false;

  public entryForm : FormGroup;

  public entry : GeneralConversation;

  ngOnInit() : void {

  	this.gcs.$systemType = this.systemType;

  	this.gcs.$sa = this.$link;

    this.route.paramMap

      .pipe(

            switchMap((params : ParamMap) => { let $e = params.get('entry');

                return this.gcs.deleteEntry($e);  })
       )
        .subscribe(($entry : GeneralConversation) => { 

          if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

          this.entryIdx = $entry.num;

          this.entry = $entry;

    			this.entryForm = this.gcfs.$entryForm();

          this.gcfs.removeControls(this.controlFilters , this.entryForm);

          this.entryForm.patchValue($entry);	}); 
  }

  public deleteEntry($entry : GeneralConversation) {

    let confirmation = confirm('Are you sure you want to proceed with this action?');

    if (!confirmation) return false;

   this.submission = true;

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.gcs.$deleteEntry(this.entryIdx)

      .subscribe(($entry : General) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not deleted.`);  }

       else if ($entry && $entry.deleted) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is deleted.`);

          return this.$entryChanges($entry);  }   });
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['system', 'internal' , this.link , 'entries']);  } , 5000) 
  }


  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

   public removeNotification() {

     this.ns.removeNotification();
   }

  get text() : FormControl {

      return this.entryForm.get('text') as FormControl;
  }

  get entrySlug() : FormControl {

    return this.entryForm.get('entrySlug') as FormControl;
  }

  get status() : FormControl {

    return this.entryForm.get('status') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }

}
