import { Component , OnInit , Injectable , Inject } from '@angular/core';

import { ActivatedRoute , Router } from '@angular/router';

import { FormControl , FormGroup , FormBuilder } from '@angular/forms';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from '../authentication.service';

import { Api , Api_Token } from '../../configuration';

import { DataService } from '../data.service';

import { User , Payload , UserFormModel } from '../user';

import { UserOther } from '../user-other';

import { General } from '../general';

import { UserAccountFormService } from '../../shared/user-account/user-account-form.service';

import { ErrorMessagesService } from '../../shared/services/error-messages.service';

import { NotificationService } from '../../shared/services/notification.service';

@Component({

  'selector' : 'app-sign-in',

  'templateUrl' : './sign-in.component.html',

  'styleUrls' : ['./sign-in.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService]

})

export class SignInComponent extends UserAccountFormService implements OnInit {

  constructor(public router : Router , private ds : DataService , public ns : NotificationService , private route : ActivatedRoute ,

              public ems : ErrorMessagesService , public aS : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api ) {  super(aS , fb , http , apiConfig);  }

  public description : string = `All members of the system are required to signin before they can complete or perform any action or task.`;

  public systemType : string;

  public viewWord : string;

  public systemGuideline : string; 

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public noEdit : boolean;

  public generalOthers : UserOther = null;

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public fip : string = 'block';

  public controlFilters : string[];

  public asyncValidators : string[];

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.signIn.systemType;

    this.viewWord = data.signIn.viewWord;

    this.systemGuideline = data.signIn.systemGuideline;

    this.title = data.signIn.title;

    this.view = data.signIn.view;

    this.link = data.signIn.link;

    this.$link = data.signIn.$link;

    this.controlFilters = data.signIn.controlFilters;

    this.noEdit = data.signIn.noEdit;

    this.asyncValidators = data.signIn.asyncValidators;

    this.ds.$systemType = this.systemType;

    this.removeControls(this.controlFilters);

    this.removeAsyncValidators(this.asyncValidators);

  }

  public confirmAuth($entry : User) : any {

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.ds.signIn($entry)

      .subscribe((data : Payload) => {

        if (!data) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not logged in.`);

          return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

       else if (data) { this.formSubmitted = false;

          this.aS.saveToken(data);

          this.aS.saveUserId(data);

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is logged in.`);

          return this.$entryChanges($entry); }   });

  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.aS.redirectAddress ? this.router.navigate([this.aS.redirectAddress]) : this.router.navigate(['/account/profile'])  } , 5000) 
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
 

}
