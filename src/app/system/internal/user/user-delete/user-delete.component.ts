import { Component , OnInit , Inject } from '@angular/core';

import { ActivatedRoute , Router } from '@angular/router';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { FormBuilder , FormGroup , FormControl } from '@angular/forms';

import { AuthenticationService } from '../../../../authentication/authentication.service';

import { Api , Api_Token } from '../../../../configuration';

import { User , User$ } from '../user';

import { General } from '../general';

import { UserService } from '../user.service';

import { UserOther } from '../user-other';

import { UserFormService } from '../user-form.service';

import { ErrorMessagesService } from '../../../../general/error-messages.service';

import { NotificationService } from '../../../../general/notification.service';

import { Role , roles } from '../roles';

import { Status , statuses } from '../status';

@Component({

  'selector' : 'app-user-delete',
  
  'templateUrl' : './user-delete.component.html',
  
  'styleUrls' : ['./user-delete.component.css'] ,

  'providers' : [NotificationService]

})

export class UserDeleteComponent extends UserFormService implements OnInit {

  constructor(public router : Router , public us : UserService , public ns : NotificationService , private route : ActivatedRoute ,

              public ufs : UserFormService , public ems : ErrorMessagesService , public aS : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api) {  super(aS , fb , http , apiConfig);  }

  private entryIdx : string = '';

  public title : string = 'User Delete';

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public user : User$;

  public view : string = '';

  public fip : string = 'block';

  ngOnInit(): void { let controls = ['faculty' , 'level' , 'about' , 'status' , 'unit' , 'username' , 'matriculationNumber' , 'jambRegistrationNumber' , 'password' , 'confirmPassword' , 'num'];

  this.removeControls(controls);

  this.removeAsyncValidators(['emailAddress' , 'username']);

    this.route.paramMap.subscribe((params) => {

      this.us.deleteUser(params.get('entry'))

        .subscribe((user : User) => { 

          if (!user) { return this.error = Object.assign({'resource' : 'User Entry'} , this.ems.message);  }

          this.entryIdx = user._id;

          this.user = user;  

          this.entryForm.patchValue(user);  })   }); 

  }

  public deleteUser(user : User) : any {

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.us.$deleteUser(this.entryIdx)

      .subscribe((data : General ) => {

        if (!data) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is unsuccessful and user is not deleted.');

          return this.error = Object.assign({'resource' : 'User Entry'} , this.ems.message);  }

       else if (data && data.deleted) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is successful and user is deleted.');

           return this.$entryChanges(data); }  });
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['system', 'internal' , 'user' , 'entries']);  } , 5000) 
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
