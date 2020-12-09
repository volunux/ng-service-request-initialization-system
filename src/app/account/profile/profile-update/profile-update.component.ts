import { Component , OnInit } from '@angular/core';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { FormBuilder , FormGroup , FormControl } from '@angular/forms';

import { switchMap } from 'rxjs/operators';

import { User } from '../user';

import { UserOther } from '../user-other';

import { General } from '../general';

import { ProfileService } from '../profile.service';

import { ProfileFormService } from '../profile-form.service';

import { AuthenticationService } from '../../../authentication/authentication.service';

import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

import { NotificationService } from '../../../shared/services/notification.service';

@Component({

  'selector' : 'app-profile-update',

  'templateUrl' : './profile-update.component.html',

  'styleUrls' : ['./profile-update.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class ProfileUpdateComponent implements OnInit {

  constructor(public router : Router , public ps : ProfileService , public ns : NotificationService , private route : ActivatedRoute ,

              public ems : ErrorMessagesService , public pfs : ProfileFormService ) {


  }

  public systemType : string = 'User';

  public entryOthers : UserOther = null;

	public title : string = `${this.systemType} Update`;

	public entry : User;

	public formModified : boolean = false;

	public formMessage : string = 'Form will not be submitted and entry will not be updated if data are unchanged since when they were retrieved from the database.';

	private entryIdx : string = '';

	public formSubmitted : boolean = false;

	public error : General | null | boolean = false;

  public view : string = '';

  public fip : string = 'block';

  public entryForm : FormGroup;

  ngOnInit() : void {

    this.entryForm = this.pfs.profileUpdate();

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { return this.ps.profileUpdate();  })
        
        )

      .subscribe((data : General) => {

					if (!data) { return this.error = Object.assign({'resource' : 'User Entry'} , this.ems.message);  }

          this.pfs.removeControls(['emailAddress'] , this.entryForm);

					this.entry = data.User;

					this.entryIdx = this.entry._id;

           this.entryOthers = new UserOther(data);

          this.pfs.createPermanent(data , this.entryForm);

					this.entryForm.patchValue(this.entry);	});
	}


	
	public updateEntry(user : User) : any {

		this.error = null;

		this.fip = 'none';

		for (let chrs in this.entry) { 

				if((this.entry[chrs] != user[chrs] && (user[chrs] !== null && user[chrs] !== undefined))) { 

					this.formModified = true;

					break;	}	}

		if (this.formModified) {

			this.formSubmitted = true;

		this.ps.$profileUpdate(this.entryIdx , user)

			.subscribe(($entry : General) => {

				if (!$entry) { this.formSubmitted = false;

					this.fip = 'block';

					this.formModified = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is unsuccessful and profile is not updated.');

					return this.error = Object.assign({'resource' : 'User Entry'} , this.ems.message);  }

				if ($entry && $entry.updated) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is successful and profile is updated.');

					return this.$entryChanges($entry.$data);	}	});		}

		else { 

			this.fip = 'block';

			return false;	}

	}

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['account' , 'profile']);  } , 5000) 
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

  get firstName() : FormControl {

      return this.entryForm.get('firstName') as FormControl;
  }

  get lastName() : FormControl {

      return this.entryForm.get('lastName') as FormControl;
  }

  get about() : FormControl {

      return this.entryForm.get('about') as FormControl;
  }

  get matriculationNumber() : FormControl {

      return this.entryForm.get('matriculationNumber') as FormControl;
  }

  get jambRegistrationNumber() : FormControl {

      return this.entryForm.get('jambRegistrationNumber') as FormControl;
  }

  get identityNumber() : FormControl {

      return this.entryForm.get('identityNumber') as FormControl;
  }

  get country() : FormControl {

      return this.entryForm.get('country') as FormControl;
  }

  get level() : FormControl {

      return this.entryForm.get('level') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }

}
