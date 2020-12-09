import { Component , ElementRef , Input , OnInit , QueryList , ViewChildren } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup , FormControl } from '@angular/forms';

import { General } from '../../interfaces/general';

import { GeneralRequest } from '../request';

import { Entry } from '../entry';

import { FileControlService } from '../../services/file-control.service';

import { GeneralRequestService } from '../general-request.service';

import { GeneralRequestFormService } from '../general-request-form.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

import { AttachmentUploadComponent } from '../../simples/attachment-upload/attachment-upload.component';

@Component({

  'selector' : 'app-entry-create',

  'templateUrl' : './entry-create.component.html',

  'styleUrls' : ['./entry-create.component.css'],

  'providers' : [NotificationService , ErrorMessagesService , FileControlService]

})

export class EntryCreateComponent implements OnInit {

  constructor(public router : Router , public grs : GeneralRequestService , public ns : NotificationService ,

              public grfs : GeneralRequestFormService , public ems : ErrorMessagesService ,  public fcs : FileControlService) {

		this.$controls = this.fcs.$controls;

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input('system-guideline') public systemGuideline : string;

  @ViewChildren('attachments') attachments : QueryList<AttachmentUploadComponent>;

  @ViewChildren('fileImage') fileInputs : QueryList<ElementRef>;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public fip : string = 'block';

  public submission : boolean = false;

  public entryForm : FormGroup;

  public $controls : { [key : string] : string }[];

  public $myFiles : { [key : string] : string | number }[] = [];

  ngOnInit() : void {

    this.grs.$systemType = this.systemType;

    this.grs.$sa = this.$link;

      this.grs.addEntry()

    .subscribe((data : General) => {

      if (!data) { this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);

      return window.scrollTo(0 , 0);  }

      if (data.permitted) { this.entryForm = this.grfs.$entryForm();	}   });

  };

  public pushFile(file) {

    this.$myFiles.push(file);
  }

  public createEntry(entry : Entry) {

    this.submission = true;

    entry.documents = [];

    this.attachments.forEach((item : AttachmentUploadComponent) => {

      if (item.$$file && item.$$file.location) { entry.documents.push(item.$$file); }  });

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.grs.$addEntry(entry)

      .subscribe(($entry : GeneralRequest) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`);

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  

          return window.scrollTo(0 , 0); }

       else if ($entry && $entry.created) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);

    this.attachments.forEach((item : AttachmentUploadComponent) => {

      if (item.currentlyUploading && item.cancelFile) { item.cancelFile.unsubscribe(); 

        item.formSubmittedUploadCancel();  }  });

          return this.$entryChanges($entry.$data);  }   });
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(data && data._id ? 

       ['request' , this.link] : ['request' , this.link , 'entry' , 'detail' , data._id] );  } 

      , 5000); 
  }

  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

   public removeNotification() : void {

     this.ns.removeNotification();
   }

  get message() : FormControl {

      return this.entryForm.get('message') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }


}
