import { Component, OnInit } from '@angular/core';

import { ActivatedRoute , Router } from '@angular/router';

import { User } from '../user';

import { General } from '../general';

import { UserService } from '../user.service';

import { ErrorMessagesService } from '../../../../general/error-messages.service';

import { NotificationService } from '../../../../general/notification.service';

@Component({

  'selector' : 'app-account-deactivate',

  'templateUrl': './account-deactivate.component.html',

  'styleUrls' : ['./account-deactivate.component.css'] ,

  'providers' : [NotificationService]

})

export class AccountDeactivateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private us : UserService ,

  						private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

	public title : string = 'User Account Deactivate';

	public user : User;

  public entryType : string = 'user';

	public formSubmitted : boolean = false;

	public error : General | null | boolean = false;

  public fip : string = 'block';

	ngOnInit(): void {

		this.route.paramMap.subscribe((params) => {

			this.us.deactivateUser(params.get('entry'))

				.subscribe((user : User) => { 

					if (!user) { return this.error = Object.assign({'resource' : 'User Entry'} , this.ems.message);  }

					this.user = user;	})   });
	}

  public deactivateUser() : any {

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none'

    this.us.$deactivateUser(this.user._id , this.user)
      
      .subscribe((user : General) => { 

        if (!user) { this.formSubmitted = false;

          this.fip = 'block'

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is unsuccessful and user account is not deactivated.');

          return this.error = Object.assign({'resource' : 'User Entry'} , this.ems.message);  }

         else { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is successful and user account is deactivated.');

        return this.$entryChanges({});  } } ,

      )

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
