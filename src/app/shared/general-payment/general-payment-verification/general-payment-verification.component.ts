import { Component , Input , OnInit } from '@angular/core';

import { ActivatedRoute , Router , Params } from '@angular/router';

import { of } from 'rxjs';

import { switchMap } from 'rxjs/operators';

import { Payment } from '../payment';

import { General } from '../general';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

import { GeneralPaymentService } from '../general-payment.service';

@Component({

  'selector' : 'app-general-payment-verification',

  'templateUrl' : './general-payment-verification.component.html',

  'styleUrls' : ['./general-payment-verification.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService ]

})

export class GeneralPaymentVerificationComponent implements OnInit {

  constructor(public router : Router , public ns : NotificationService , public ems : ErrorMessagesService ,

  						private route : ActivatedRoute , private gps: GeneralPaymentService) {

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public error : General | null | boolean = false;

  ngOnInit() : void {

    this.gps.$systemType = this.systemType;

    this.gps.$sa = this.$link;

    this.route.queryParams

      .pipe(

          switchMap((params : Params) => { let $e = params.reference;

          	return this.gps.$verifyPayment($e);  }) ,

          switchMap(($entry : General) => {  if (!$entry) return of(null);

          	let entry = this.gps.createPayment($entry.$data.data);

          	return this.gps.$addEntry(entry);  })
        )
          .subscribe(($entry : General) => {

    					if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

               else if ($entry && $entry.created) {
          
                  this.ns.setNotificationStatus(true);

                  this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);

                  return this.$entryChanges($entry.$data);  }  });
  };

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(data && data._id ? 

        ['payment' , this.link , 'entry' , 'detail' , data._id] : ['payment' , this.link] );  } 

      , 5000); 
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
