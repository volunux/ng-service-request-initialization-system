import { Component , OnInit } from '@angular/core';

import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';

import { ActivatedRoute , Router } from '@angular/router';

import { User } from '../user';

import { General , emailAddress } from '../general';

import { AuthenticationService } from '../authentication.service';

import { DataService } from '../data.service';

import { emailAddressValidator } from '../../shared/services/form-validators.service';

import { fadeAnimation } from '../../animations';

import { ErrorMessagesService1 } from '../error-messages.service1';

import { NotificationService } from '../../shared/services/notification.service';

@Component({

  'selector' : 'app-forgot-password',

  'templateUrl' : './forgot-password.component.html',

  'styleUrls' : ['./forgot-password.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService1] ,

  'animations' : [fadeAnimation]

})

export class ForgotPasswordComponent implements OnInit {

  constructor(private router : Router , private ds : DataService , private aS : AuthenticationService , private fb : FormBuilder ,

              private ns : NotificationService , private route : ActivatedRoute , private ems : ErrorMessagesService1) { 

  }

  public description : string = `All members of the system are will be able to recover their account if they have an email address registered in the system.`;

  public systemType : string;

  public viewWord : string;

  public systemGuideline : string; 

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public noEdit : boolean;

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public fip : string = 'block';

  public passwordToken : string;

  public changesSuccess : boolean;

  public entryForm : FormGroup;

  ngOnInit() : void {

    this.entryForm = this.fb.group({ 

      'emailAddress' : ['' , {'validators' : [Validators.required , Validators.minLength(7) , Validators.maxLength(50) , emailAddressValidator(emailAddress) ] } ] });

    let data = this.route.snapshot.data;

    this.systemType = data.forgotPassword.systemType;

    this.viewWord = data.forgotPassword.viewWord;

    this.systemGuideline = data.forgotPassword.systemGuideline;

    this.title = data.forgotPassword.title;

    this.view = data.forgotPassword.view;

    this.link = data.forgotPassword.link;

    this.$link = data.forgotPassword.$link;

    this.noEdit = data.forgotPassword.noEdit;

    this.ds.$systemType = this.systemType;
  
  }
 
  public confirmEntry($entry : General) : any {

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.ds.$forgotPassword($entry)

      .subscribe(($entry : General) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`);

          return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

         else if ($entry) { this.formSubmitted = false;

           this.changesSuccess = true;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} entry is updated.`);

           return this.$entryChanges($entry); }  });

  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigateByUrl('/');  } , 30000) 
  }

 get emailAddress() : FormControl {

    return this.entryForm.get('emailAddress') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
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

}
