import { Component , OnInit , Inject } from '@angular/core';

import { ActivatedRoute , ParamMap , Router } from '@angular/router';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { FormBuilder , FormGroup , FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

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

	'selector' : 'app-user-update',
	
	'templateUrl' : './user-update.component.html',
	
	'styleUrls' : ['./user-update.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class UserUpdateComponent extends UserAccountFormService implements OnInit {

  constructor(public router : Router , public us : UserService , public ns : NotificationService , private route : ActivatedRoute ,

              public ufs : UserAccountFormService , public ems : ErrorMessagesService , public aS : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api) {  super(aS , fb , http , apiConfig);  }

  public systemType : string;

	public title : string;

	public view : string;

	public viewWord : string;

	public link : string;

	public link2 : boolean;

	public $link : string;

	public controlFilters : string[];

	public noEdit : boolean;

  public generalOthers : UserOther = null;

	public entryForm : FormGroup;

	public entry : User;

	public formModified : boolean = false;

	public formMessage : string = 'Form will not be submitted and entry will not be updated if data are unchanged since when they were retrieved from the database.';

	private entryIdx : string = '';

	public formSubmitted : boolean = false;

	public error : General | null | boolean = false;

  public roles : Role[] = roles;

  public statuses : Status[] = statuses;

  public fip : string = 'block';


	ngOnInit(): void {

  	let data = this.route.snapshot.data;

  	this.systemType = data.update.systemType;

  	this.title = data.update.title;

  	this.view = data.update.view;

  	this.viewWord = data.update.viewWord;

  	this.link = data.update.link;

  	this.link2 = data.link2;

  	this.$link = data.update.$link;

  	this.controlFilters = data.update.controlFilters;

  	this.noEdit = data.update.noEdit;

  	this.us.$systemType = this.systemType;

  	this.us.$sa = this.$link;

  	this.removeControls(this.controlFilters);

		this.route.paramMap.subscribe((params : ParamMap) => { let $e = params.get('entry');

			this.us.updateUser($e , this.link2)

				.subscribe((data : General) => { 

					if (!data) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

					this.entry = data[this.systemType];

					this.entryIdx = this.entry._id;

         this.generalOthers = new UserOther(data);

          this.createPermanent(data);

					this.entryForm.patchValue(this.entry);	})   });
	}

	public confirmChanges(entry : User , $entry : User) : boolean {

		for (let chrs in entry) {

				if((entry[chrs] != $entry[chrs] && ($entry[chrs] !== null && $entry[chrs] !== undefined))) { 

					this.formModified = true;

					break;	}	}

     let $$entry = Object.keys(entry);

     let $$$entry = Object.keys($entry);

    const found = $$$entry.some((r) => {
      
        if (!($$entry.indexOf(r) > -1)) {

            this.formModified = true;  }  })

    return this.formModified;
	}

	public updateEntry($entry : User) : any {

		this.error = null;

    this.fip = 'none';

    this.confirmChanges(this.entry , this.entryForm.value);

		if (this.formModified) {

			this.formSubmitted = true;

		this.us.$updateUser(this.entryIdx , $entry , this.link2)

			.subscribe(($entry : General) => {

				if (!$entry) { this.formSubmitted = false;

					this.fip = 'block';

					this.formModified = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`);

					return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

				if ($entry && $entry.updated) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is updated.`);

					return this.$entryChanges($entry.$data);	}	});		}

		else { 

			this.fip = 'block';

			return false;	}

	}

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['system' , 'internal' , this.link , 'entries']);  } , 5000) 
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
