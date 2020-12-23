import { Component , Input , OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap , Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { General } from '../../interfaces/general';

import { GeneralAllService } from '../general-all.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

@Component({

  'selector' : 'app-general-all-entry-delete-all',

  'templateUrl' : './general-all-entry-delete-all.component.html',

  'styleUrls' : ['./general-all-entry-delete-all.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class GeneralAllEntryDeleteAllComponent implements OnInit {
  
	constructor(private route : ActivatedRoute , private router : Router , private gas : GeneralAllService , 

              private ems : ErrorMessagesService , private ns : NotificationService) { 

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

  public canDelete : boolean = false;

  ngOnInit() : void {

    this.gas.$sa = this.$link;

    this.route.paramMap.pipe(

      switchMap((params : ParamMap) => {

          return this.gas.deleteAllEntry();  })
      )
        .subscribe(($entry) => { 

        if (!$entry.length) { this.canDelete = false;

          return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

        this.canDelete = true;  });

  }

  public deleteAllEntry() : any {

    let confirmation = confirm('Are you sure you want to proceed with this action?');

    if (!confirmation) return false;

    this.gas.$systemType = this.systemType;

    this.gas.$sa = this.$link;

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.gas.$deleteAllEntry()
      
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
