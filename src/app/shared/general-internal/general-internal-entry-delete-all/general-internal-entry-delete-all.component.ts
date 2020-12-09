import { Component , Input , OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { General } from '../../interfaces/general';

import { GeneralInternalService } from '../general-internal.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

@Component({

  'selector' : 'app-general-internal-entry-delete-all',

  'templateUrl' : './general-internal-entry-delete-all.component.html',

  'styleUrls' : ['./general-internal-entry-delete-all.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class GeneralInternalEntryDeleteAllComponent implements OnInit {

  constructor(private router : Router , private gis : GeneralInternalService , 

              private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

  ngOnInit() : void {

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public fip : string = 'block';

  public deleteAllEntry() : any {

    let confirmation = confirm('Are you sure you want to proceed with this action?');

    if (!confirmation) return false;

    this.gis.$systemType = this.systemType;

    this.gis.$sa = this.$link;

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.gis.$deleteAllGeneralInternal()
      
      .subscribe(($entry : General) => { 

        if (!($entry && $entry.length)) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and all ${this.systemType} entry is not deleted.`);

          return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

         else { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and all ${this.systemType} entry is deleted.`);

        return this.$entryChanges({});  } } ,

      )

  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['system' , 'internal' , this.link]);  } , 5000) 
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
