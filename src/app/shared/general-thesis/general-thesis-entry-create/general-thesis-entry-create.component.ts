import { Component , ElementRef , Input , OnInit , QueryList , ViewChildren } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup , FormControl } from '@angular/forms';

import { General } from '../../interfaces/general';

import { GeneralThesis } from '../general-thesis';

import { Entry } from '../entry';

import { ThesisOther } from '../thesis-other';

import { FileControlService } from '../../services/file-control.service';

import { GeneralThesisService } from '../general-thesis.service';

import { GeneralThesisFormService } from '../general-thesis-form.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

import { AttachmentUploadComponent } from '../../simples/attachment-upload/attachment-upload.component';

@Component({

  'selector' : 'app-general-thesis-entry-create',
  
  'templateUrl' : './general-thesis-entry-create.component.html',
  
  'styleUrls' : ['./general-thesis-entry-create.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService , FileControlService]

})

export class GeneralThesisEntryCreateComponent implements OnInit {

  constructor(public router : Router , public gts : GeneralThesisService , public ns : NotificationService ,

              public gtfs : GeneralThesisFormService , public ems : ErrorMessagesService ,  public fcs : FileControlService) {

		this.$controls = [ {'label' : 'Thesis' ,

    'key' : 'documents' ,

    'accepts' : 'application/pdf' ,

    'controlType' : 'file' } ];

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input('system-guideline') public systemGuideline : string;

  @ViewChildren('attachments') attachments : QueryList<AttachmentUploadComponent>;

  @ViewChildren('fileAttachment') fileInputs : QueryList<ElementRef>;

  @Input('title') public $title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  @Input() public controlFilters : string[];

  @Input() public noEdit : boolean;

  @Input() public placeholder : { [key : string] : string };

  @Input('attachment-name') public attachmentName : string;

  @Input('attachment-type') public attachmentType : string;

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public fip : string = 'block';

  public submission : boolean = false;

  public entryForm : FormGroup;

  public generalOthers : ThesisOther;

  public $controls : { [key : string] : string }[];

  public $myFiles : { [key : string] : string | number }[] = [];

  ngOnInit() : void {

    this.gts.$systemType = this.systemType;

    this.gts.$sa = this.$link;

      this.gts.addEntry()

    .subscribe((data : General) => {

      if (!data) { this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);

      return window.scrollTo(0 , 0);  }

      if (data.permitted) { this.entryForm = this.gtfs.$entryForm();

        this.gtfs.removeControls(this.controlFilters , this.entryForm);

        this.generalOthers = new ThesisOther(data.$data);

        this.gtfs.createPermanent(data.$data , this.entryForm);  }   });

  };

  public pushFile(file) {

    this.$myFiles.push(file);
  }

  public createEntry(entry : Entry) {

    this.submission = true;

    entry.document = null;

    this.attachments.forEach((item : AttachmentUploadComponent) => {

      if (item.$$file && item.$$file.location) { entry.document = item.$$file; }  });

    if (!entry.document) return false;

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.gts.$addEntry(entry)

      .subscribe(($entry : GeneralThesis) => {

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

  get authorName() : FormControl {

      return this.entryForm.get('authorName') as FormControl;
  }

  get title() : FormControl {

      return this.entryForm.get('title') as FormControl;
  }

  get datePublished() : FormControl {

      return this.entryForm.get('datePublished') as FormControl;
  }

  get description() : FormControl {

      return this.entryForm.get('description') as FormControl;
  }

  get faculty() : FormControl {

      return this.entryForm.get('faculty') as FormControl;
  }

  get department() : FormControl {

      return this.entryForm.get('department') as FormControl;
  }

  get status() : FormControl {

      return this.entryForm.get('status') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }


}
