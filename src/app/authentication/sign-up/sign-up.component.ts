import { Component , OnInit , Injectable , Inject } from '@angular/core';

import { ActivatedRoute , Router } from '@angular/router';

import { FormControl , FormGroup , FormBuilder } from '@angular/forms';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from '../authentication.service';

import { Api , Api_Token } from '../../configuration';

import { DataService } from '../data.service';

import { User , UserFormModel } from '../user';

import { UserOther } from '../user-other';

import { General } from '../general';

import { AuthenticationFormService } from '../authentication-form.service';

import { UserAccountFormService } from '../../shared/user-account/user-account-form.service';

import { ErrorMessagesService } from '../../shared/services/error-messages.service';

import { NotificationService } from '../../shared/services/notification.service';

@Component({

  'selector' : 'app-sign-up',

  'templateUrl' : './sign-up.component.html',

  'styleUrls' : ['./sign-up.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService]

})

export class SignUpComponent extends UserAccountFormService implements OnInit {

  constructor(public router : Router , private ds : DataService , public ns : NotificationService , private route : ActivatedRoute ,

              public ems : ErrorMessagesService , public aS : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api ) {  super(aS , fb , http , apiConfig);  }

  public systemType : string;

  public viewWord : string;

  public systemGuideline : string; 

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public controlFilters : string[];

  public noEdit : boolean;

  public generalOthers : UserOther = null;

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public fip : string = 'block';

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.signUp.systemType;

    this.viewWord = data.signUp.viewWord;

    this.systemGuideline = data.signUp.systemGuideline;

    this.title = data.signUp.title;

    this.view = data.signUp.view;

    this.link = data.signUp.link;

    this.$link = data.signUp.$link;

    this.controlFilters = data.signUp.controlFilters;

    this.noEdit = data.signUp.noEdit;

    this.ds.$systemType = this.systemType;

      this.ds.addUser()

    .subscribe((data : General) => {

      if (!data) { this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);

      return window.scrollTo(0 , 0);  }

      if (data) { this.generalOthers = new UserOther(data);

        this.removeControls(this.controlFilters);

        this.createPermanent(data);  }   });

  };

  public addEntry($entry : User) {

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.ds.$addUser($entry)

      .subscribe((data : General | null) => {

        if (!data) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`);

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  

          return window.scrollTo(0 , 0); }

       else if (data && data.created) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);

          return this.$entryChanges(data);  }   });
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(data && data.user && data.user._id ? 

       ['system' , 'internal' , this.link , 'entries'] : ['system' , 'internal' , this.link , 'entries']);  } 

      , 5000); 
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
