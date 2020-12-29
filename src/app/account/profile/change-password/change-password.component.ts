import { Component , OnInit } from '@angular/core';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { FormGroup , FormControl } from '@angular/forms';

import { switchMap } from 'rxjs/operators';

import { User } from '../user';

import { General } from '../general';

import { ProfileService } from '../profile.service';

import { ProfileFormService } from '../profile-form.service';

import { AuthenticationService } from '../../../authentication/authentication.service';

import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

import { NotificationService } from '../../../shared/services/notification.service';

@Component({

  'selector' : 'app-change-password',

  'templateUrl' : './change-password.component.html',

  'styleUrls' : ['./change-password.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class ChangePasswordComponent implements OnInit {

  constructor(private pfs : ProfileFormService , public router : Router , public ps : ProfileService , 

              public ns : NotificationService , private auth : AuthenticationService , private route : ActivatedRoute ,

              public ems : ErrorMessagesService) { 

  }

  public systemType : string = 'User';

  public title : string = 'Change Password';

  public view : string = 'cp';

  public entryIdx : string = '';

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public fip : string = 'block';

  public entryForm : FormGroup;

  ngOnInit() : void {

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { return this.ps.entryExist();  })
        
        )

      .subscribe(($entry : User) => {

          if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

          this.entryIdx = $entry._id;

          this.entryForm = this.pfs.changePassword();  });

  }

  public $changePassword($entry : General) {

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.ps.changePassword($entry)

      .subscribe(($entry : General) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} entry is not updated.`);

          return this.error = Object.assign({'resource' : 'User Security'} , this.ems.message);  }

         else if ($entry) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} entry is updated.`);

          this.auth.logout();

           return this.$entryChanges($entry); }  });
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigateByUrl('/signin');  } , 5000) 
  }
  
  get password() : FormControl {

      return this.entryForm.get('password') as FormControl;
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
