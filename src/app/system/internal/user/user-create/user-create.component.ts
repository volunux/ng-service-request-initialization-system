import { Component , OnInit , Inject } from '@angular/core';

import { ActivatedRoute , Router } from '@angular/router';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { FormBuilder , FormGroup , FormControl } from '@angular/forms';

import { AuthenticationService } from '../../../../authentication/authentication.service';

import { Api , Api_Token } from '../../../../configuration';

import { User } from '../user';

import { General } from '../general';

import { UserService } from '../user.service';

import { UserOther } from '../user-other';

import { UserAccountFormService } from '../../../../shared/user-account/user-account-form.service'; 

import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

import { NotificationService } from '../../../../shared/services/notification.service';

import { Role , roles } from '../roles';

import { Status , statuses } from '../status';


@Component({

  'selector' : 'app-user-create',

  'templateUrl' : './user-create.component.html',

  'styleUrls' : ['./user-create.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class UserCreateComponent extends UserAccountFormService implements OnInit {

  constructor(public router : Router , public us : UserService , public ns : NotificationService , private route : ActivatedRoute ,

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

  public roles : Role[] = roles;

  public statuses : Status[] = statuses;

  public fip : string = 'block';

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.create.systemType;

    this.viewWord = data.create.viewWord;

    this.systemGuideline = data.create.systemGuideline;

    this.title = data.create.title;

    this.view = data.create.view;

    this.link = data.create.link;

    this.$link = data.create.$link;

    this.controlFilters = data.create.controlFilters;

    this.noEdit = data.create.noEdit;

    this.us.$systemType = this.systemType;

    this.us.$sa = this.$link;

      this.us.addUser()

    .subscribe((data : General) => {

      if (!data) { this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);

      return window.scrollTo(0 , 0);  }

      if (data) { this.generalOthers = new UserOther(data);

        this.createPermanent(data);  }   });

  };

  public addEntry($entry : User) {

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.us.createUser($entry)

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
