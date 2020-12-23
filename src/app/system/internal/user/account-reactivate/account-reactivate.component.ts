import { Component , OnInit } from '@angular/core';

import { ActivatedRoute , Router } from '@angular/router';

import { User } from '../user';

import { General } from '../general';

import { UserService } from '../user.service';

import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

import { NotificationService } from '../../../../shared/services/notification.service';


@Component({

  'selector' : 'app-account-reactivate',

  'templateUrl': './account-reactivate.component.html',

  'styleUrls' : ['./account-reactivate.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class AccountReactivateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private us : UserService , 

  						private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public link2 : boolean;

  public $link : string;

  public controlFilters : string[];

  public noEdit : boolean;

	public entry : User;

	private entryIdx : string = '';

	public formSubmitted : boolean = false;

  public fip : string = 'block';

	public error : General | null | boolean = false;

	ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.changes.systemType;

    this.title = data.changes.title;

    this.view = data.changes.view;

    this.viewWord = data.changes.viewWord;

    this.link = data.changes.link;

    this.link2 = data.link2;

    this.$link = data.changes.$link;

    this.controlFilters = data.changes.controlFilters;

    this.noEdit = data.changes.noEdit;

		this.route.paramMap.subscribe((params) => { let $e = params.get('entry');

			this.us.reactivateUser($e , this.link2)

				.subscribe(($entry : User) => { 

					if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

					this.entryIdx = $entry._id;

					this.entry = $entry;	})   });
	}

  public reactivateEntry() : any {

    let confirmation = confirm('Are you sure you want to proceed with this action?');

    if (!confirmation) return false;

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.us.$reactivateUser(this.entry._id , this.entry , this.link2)
      
      .subscribe(($entry : General) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`);

          return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

        if ($entry && $entry.updated) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is updated.`);

          return this.$entryChanges($entry.$data);  }  });

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
