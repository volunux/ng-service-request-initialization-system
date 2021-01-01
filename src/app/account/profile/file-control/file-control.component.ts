import { Component , Input , OnInit , ElementRef , ViewChildren , QueryList } from '@angular/core';

import { Router } from '@angular/router';

import { FormControl , FormGroup , FormBuilder } from '@angular/forms';

import { General } from '../general';

import { ProfileService } from '../profile.service';

import { ProfileFormService } from '../profile-form.service';

import { ProfileFileControlService } from '../profile-file-control.service';

import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

import { NotificationService } from '../../../shared/services/notification.service';

import { AttachmentUploadComponent } from '../../../shared/simples/attachment-upload/attachment-upload.component';

@Component({
  
  'selector' : 'app-file-control',
  
  'templateUrl' : './file-control.component.html',
  
  'styleUrls': ['./file-control.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class FileControlComponent implements OnInit {

  constructor(public router : Router , public ps : ProfileService , public ns : NotificationService , private pfs : ProfileFormService ,

              public fb : FormBuilder , public ems : ErrorMessagesService ,  public pfcs : ProfileFileControlService) {

    this.$controls = this.pfcs.$controls;

  }

  public systemType : string = 'User';

  public viewWord : string = 'User';

  public systemGuideline : string = 'file';

  public title : string = 'Change Profile Photo and Signature';

  public view : string = 'cppas';

  public link : string = 'profile';

  public $link : string = 'user';

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public fip : string = 'block';

  public submission : boolean = false;

  public entryForm : FormGroup;

  public $controls : { [key : string] : string }[];

  public $displayKeys = ['profilePhoto' , 'signature'];

  public uploadedFiles : string[] = [];

  public $myFiles : { [key : string] : string | number }[] = [];

  @ViewChildren('attachments') attachments : QueryList<AttachmentUploadComponent>;

  @ViewChildren('fileAttachment') fileInputs : QueryList<ElementRef>;

  ngOnInit() : void {

      this.entryForm = this.pfs.changeDisplay();

      this.entryForm.patchValue({'profilePhoto' : {} , 'signature' : {}});

  };

  public pushFile(file) {

    this.$myFiles.push(file);
  }

  public updateDisplay(entry : General) {

    this.submission = true;

    this.attachments.forEach((item : AttachmentUploadComponent , i : number) => {

      if (item.$$file && item.$$file.location) { entry[this.$displayKeys[i]] = item.$$file; 

          this.uploadedFiles.push('yes');  }  });

    if (this.uploadedFiles.length < 1) { return false; }

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.ps.$updateDisplay(entry)

      .subscribe(($entry : General) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`);

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  

          return window.scrollTo(0 , 0); }

       else if ($entry && $entry.updated) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated.`);

          this.attachments.forEach((item : AttachmentUploadComponent) => {

            if (item.currentlyUploading && item.cancelFile) { item.cancelFile.unsubscribe(); 

              item.formSubmittedUploadCancel();  }  });

          return this.$entryChanges($entry.$data);  }   });
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(data && data._id ? 

       ['account' , 'profile'] : ['account' , this.link , 'entry' , 'detail' , data._id] );  } 

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

  get profilePhoto() : FormControl {

    return this.entryForm.get('profilePhoto') as FormControl;
  }

  get signature() : FormControl {

    return this.entryForm.get('signature') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }


}
