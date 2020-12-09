import { Component , OnInit , Inject } from '@angular/core';

import { ActivatedRoute , Router } from '@angular/router';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { FormBuilder , FormGroup , FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { AuthenticationService } from '../../../../authentication/authentication.service';

import { Api , Api_Token } from '../../../../configuration';

import { User , User$ } from '../user';

import { General } from '../general';

import { UserService } from '../user.service';

import { UserOther } from '../user-other';

import { UserFormService } from '../user-form.service';

import { DialogService } from './dialog.service';

import { ErrorMessagesService } from '../../../../general/error-messages.service';

import { NotificationService } from '../../../../general/notification.service';

import { Role , roles } from '../roles';

import { Status , statuses } from '../status';

@Component({

	'selector' : 'app-user-update',
	
	'templateUrl' : './user-update.component.html',
	
	'styleUrls' : ['./user-update.component.css'] ,

  'providers' : [NotificationService]

})

export class UserUpdateComponent extends UserFormService implements OnInit {

  constructor(public router : Router , public us : UserService , public ns : NotificationService , private route : ActivatedRoute ,

              public ufs : UserFormService , public ems : ErrorMessagesService , public aS : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api , private dialogService : DialogService) {  super(aS , fb , http , apiConfig);  }

  public userOthers : UserOther = null;

	public title : string = 'User Update';

	public userForm : FormGroup;

	public user : User;

	public formModified : boolean = false;

	public formMessage : string = 'Form will not be submitted and entry will not be updated if data are unchanged since when they were retrieved from the database.';

	private entryIdx : string = '';

	public formSubmitted : boolean = false;

	public error : General | null | boolean = false;

  public roles : Role[] = roles;

  public statuses : Status[] = statuses;

  public view : string = '';

  public fip : string = 'block';


	ngOnInit(): void { let controls = ['password' , 'confirmPassword' , 'num'];

  this.removeControls(controls);

		this.route.paramMap.subscribe((params) => {

			this.us.updateUser(params.get('entry'))

				.subscribe((data : General) => { 

					if (!data) { return this.error = Object.assign({'resource' : 'User Entry'} , this.ems.message);  }

					this.user = data.User ? new User$(data.User) : {};

					this.entryIdx = this.user._id;

         this.userOthers = new UserOther(data);

          this.createPermanent(data);

					this.entryForm.patchValue(this.user);	})   });
	}

	public updateUser(user : User) : any {

		this.error = null;

		this.fip = 'none';

		for (let chrs in this.user) { 

				if((this.user[chrs] != user[chrs] && (user[chrs] !== null && user[chrs] !== undefined))) { 

					this.formModified = true;

					break;	}	}

		if (this.formModified) {

			this.formSubmitted = true;

		this.us.$updateUser(this.entryIdx , user)

			.subscribe((data : General) => {

				if (!data) { this.formSubmitted = false;

					this.fip = 'block';

					this.formModified = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is unsuccessful and user is not updated.');

					return this.error = Object.assign({'resource' : 'User Entry'} , this.ems.message);  }

				if (data && data.updated) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is successful and user is updated.');

					return this.$entryChanges(data);	}	});		}

		else { 

			this.fip = 'block';

			return false;	}

	}

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['system' , 'internal' , 'user' , 'entries']);  } , 5000) 
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
