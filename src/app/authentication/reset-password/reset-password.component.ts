import { Component , OnInit } from '@angular/core';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { FormGroup , FormControl } from '@angular/forms';

import { switchMap } from 'rxjs/operators';

import { User } from '../user';

import { General } from '../general';

import { DataService } from '../data.service';

import { AuthenticationService } from '../authentication.service';

import { AuthenticationFormService } from '../authentication-form.service';

import { ErrorMessagesService1 } from '../error-messages.service1';

import { NotificationService } from '../../shared/services/notification.service';

@Component({

  'selector' : 'app-reset-password',

  'templateUrl' : './reset-password.component.html',

  'styleUrls' : ['./reset-password.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService1]

})
export class ResetPasswordComponent implements OnInit {


  constructor(private afs : AuthenticationFormService , private router : Router , private ds : DataService , private aS : AuthenticationService ,

              private ns : NotificationService , private route : ActivatedRoute , private ems : ErrorMessagesService1) { 

  }

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

    let data = this.route.snapshot.data;

    this.systemType = data.resetPassword.systemType;

    this.viewWord = data.resetPassword.viewWord;

    this.systemGuideline = data.resetPassword.systemGuideline;

    this.title = data.resetPassword.title;

    this.view = data.resetPassword.view;

    this.link = data.resetPassword.link;

    this.$link = data.resetPassword.$link;

    this.noEdit = data.resetPassword.noEdit;

    this.ds.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { let $e = params.get('token');

          this.passwordToken = $e;

           return this.ds.resetPassword($e);  })	)

      .subscribe(($entry : General) => {

          if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

          this.entryForm = this.afs.resetPassword(); });

  }

  public $resetPassword($entry : General) {

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.ds.$resetPassword(this.passwordToken , $entry)

      .subscribe(($entry : General) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not logged in.`);

          return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

         else if ($entry) { this.formSubmitted = false;

           this.changesSuccess = true;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} entry is updated.`);

          this.aS.logout();

           return this.$entryChanges($entry); }  });
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigateByUrl('/');  } , 15000) 
  }
  
  get newPassword() : FormControl {

  		return this.entryForm.get('newPassword') as FormControl;
  }

  get confirmPassword() : FormControl {

  		return this.entryForm.get('confirmPassword') as FormControl;
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
