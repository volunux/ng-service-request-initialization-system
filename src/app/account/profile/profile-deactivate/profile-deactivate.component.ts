import { Component , OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap , Router } from '@angular/router';

import { FormControl , FormGroup } from '@angular/forms';

import { switchMap } from 'rxjs/operators';

import { User } from '../user';

import { General } from '../general';

import { ProfileService } from '../profile.service';

import { ProfileFormService } from '../profile-form.service';

import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

import { NotificationService } from '../../../shared/services/notification.service';

@Component({

  'selector' : 'app-profile-deactivate',

  'templateUrl' : './profile-deactivate.component.html',

  'styleUrls' : ['./profile-deactivate.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class ProfileDeactivateComponent implements OnInit {

  constructor(private pfs : ProfileFormService , public router : Router , public ps : ProfileService , 

              public ns : NotificationService , private route : ActivatedRoute , public ems : ErrorMessagesService) { 

  }

  public systemType : string = 'User';

	public title : string = `${this.systemType} Account Deactivate`;

	public entry : User;

	public formSubmitted : boolean = false;

	public error : General | null | boolean = false;

  public view : string = 'udp';

  public fip : string = 'block';

  public entryForm : FormGroup;

  ngOnInit(): void {

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { return this.ps.deactivateProfile();  })
        
        )

      .subscribe(($entry : User) => {

					if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

					this.entryForm = this.pfs.statusProfile();

					this.entry = $entry;

					this.entryForm.patchValue(this.entry);	});
	}

  public deactivateEntry() : any {

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none'

    this.ps.$deactivateProfile(this.entry)
      
      .subscribe(($entry : General) => { 

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block'

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not deactivated.`);

          return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

         else { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is deactivated.`);

        return this.$entryChanges({});  } });

  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['account' , 'profile' ]);  } , 5000) 
  }

  get emailAddress() : FormControl {

  	return this.entryForm.get('emailAddress') as FormControl;
  }

  get identityNumber() : FormControl {

  	return this.entryForm.get('identityNumber') as FormControl;
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