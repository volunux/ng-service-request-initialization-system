import { Component , OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { General } from '../general';

import { UserService } from '../user.service';

import { ErrorMessagesService } from '../../../../general/error-messages.service';

import { NotificationService } from '../../../../general/notification.service';

@Component({

  'selector' : 'app-user-delete-all',

  'templateUrl' : './user-delete-all.component.html',

  'styleUrls' : ['./user-delete-all.component.css'] ,

  'providers' : [NotificationService]

})

export class UserDeleteAllComponent implements OnInit {

  constructor(private router : Router , private us : UserService , 

              private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

  ngOnInit() : void {

  }

  public title : string = 'User : Delete All Entries';

  public entryType : string = 'user';

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public view : string = 'uadp';

  public fip : string = 'block';

  public deleteAllUser() : any {

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.us.$deleteAllUser()
      
      .subscribe((user : General) => { 

        if (!(user && user.length)) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is unsuccessful and all user is not deleted.');

          return this.error = Object.assign({'resource' : 'User Entry'} , this.ems.message);  }

         else { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is successful and all user is deleted.');

        return this.$entryChanges({});  } } ,

      )

  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['system' , 'internal' , 'user']);  } , 5000) 
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
