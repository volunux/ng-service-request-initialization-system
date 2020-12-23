import { Component , OnInit , Inject } from '@angular/core';

import { ActivatedRoute , ParamMap , Router } from '@angular/router';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { FormBuilder , FormGroup , FormControl } from '@angular/forms';

import { AuthenticationService } from '../../../../authentication/authentication.service';

import { Api , Api_Token } from '../../../../configuration';

import { User , User$ } from '../user';

import { General } from '../general';

import { UserService } from '../user.service';

import { UserOther } from '../user-other';

import { UserFormService } from '../user-form.service';

import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

import { NotificationService } from '../../../../shared/services/notification.service';

@Component({

  'selector' : 'app-user-delete',
  
  'templateUrl' : './user-delete.component.html',
  
  'styleUrls' : ['./user-delete.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService]

})

export class UserDeleteComponent extends UserFormService implements OnInit {

  constructor(public router : Router , public us : UserService , public ns : NotificationService , private route : ActivatedRoute ,

              public ufs : UserFormService , public ems : ErrorMessagesService , public aS : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api) {  super(aS , fb , http , apiConfig);  }

  public systemType : string;

  public viewWord : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public controlFilters : string[];

  public asyncValidators : string[];

  public noEdit : boolean;

  private entryIdx : string = '';

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public entry : User$;

  public fip : string = 'block';

  public submission : boolean = false;

  ngOnInit(): void {

    let data = this.route.snapshot.data;

    this.systemType = data.delete.systemType;

    this.viewWord = data.delete.viewWord;

    this.systemGuideline = data.delete.systemGuideline;

    this.title = data.delete.title;

    this.view = data.delete.view;

    this.link = data.delete.link;

    this.$link = data.delete.$link;

    this.controlFilters = data.delete.controlFilters;

    this.noEdit = data.delete.noEdit;

    this.asyncValidators = data.delete.asyncValidators;

    this.us.$systemType = this.systemType;

    this.us.$sa = this.$link;

  this.removeControls(this.controlFilters);

  this.removeAsyncValidators(this.asyncValidators);

    this.route.paramMap.subscribe((params : ParamMap) => { let $e = params.get('entry');

      this.us.deleteUser($e)

        .subscribe(($entry : User) => { 

          if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

          this.entryIdx = $entry._id;

          this.entry = $entry;  

          this.entryForm.patchValue(this.entry);  })   }); 

  }

  public deleteEntry(entry : User) : any {

    let confirmation = confirm('Are you sure you want to proceed with this action?');

    if (!confirmation) return false;

   this.submission = true;

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.us.$deleteUser(this.entryIdx)

      .subscribe(($entry : General) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not deleted.`);  }

       else if ($entry && $entry.deleted) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is deleted.`);

          return this.$entryChanges($entry);  }   });
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['system', 'internal' , this.link , 'entries']);  } , 5000) 
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
