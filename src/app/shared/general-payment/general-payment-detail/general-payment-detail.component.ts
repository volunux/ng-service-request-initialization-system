import { Component , Input , OnInit } from '@angular/core';

import { Router , ActivatedRoute , ParamMap } from '@angular/router';

import { FormGroup , FormControl } from '@angular/forms';

import { of } from 'rxjs';

import { switchMap } from 'rxjs/operators';

import { General } from '../../interfaces/general';

import { Payment } from '../payment';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

import { AuthenticationService } from '../../../authentication/authentication.service';

import { GeneralPaymentService } from '../general-payment.service';

@Component({

  'selector' : 'app-general-payment-detail',

  'templateUrl' : './general-payment-detail.component.html',

  'styleUrls' : ['./general-payment-detail.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class GeneralPaymentDetailComponent implements OnInit {

  constructor(private as : AuthenticationService , public router : Router , public ns : NotificationService , 

  						private route : ActivatedRoute , public ems : ErrorMessagesService , private gps : GeneralPaymentService) { 

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;
  
  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public error : General | null | boolean = false;

  public entry : Payment;

  private entryRef : string = '';

  ngOnInit() : void {

    this.gps.$systemType = this.systemType;

    this.gps.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { let $e = params.get('entry');

          	return this.gps.getEntry($e);  })
      )
      .subscribe(($entry : any) => {

					if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Payment Entry`} , this.ems.message);  }

					this.entryRef = $entry.paymentReference;

					this.entry = $entry;	});
  }

  public refundEntry() {

      let confirmRefund = confirm('Are you sure you want to confirm the refund?');

      if (confirmRefund) {

          this.error = null;

        let entry = { 'transaction' : this.entry.paymentReference };

        this.gps.$refundEntry(this.entry._id , entry)

          .pipe(

              switchMap(($entry : General) => {  if (!$entry) return of(null);

                return this.gps.$createRefund(this.entry._id , this.entry)  })
          )
            .subscribe(($entry : Payment) =>  {

                  if (!$entry) {

                      this.ns.setNotificationStatus(true);

                      this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not refunded.`);

                    return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

                  if ($entry.updated && $entry.$data) {

                      this.ns.setNotificationStatus(true);

                      this.ns.addNotification(`Operation is successful and ${this.systemType} is refunded.`);

                      return this.$entryChanges($entry.$data)  }
            })

      } else { return false; }
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(data && data._id ? 

       ['payment' , this.link , 'entries'] : ['payment' , this.link , 'entry' , 'detail' , data._id] );  } 

      , 5000); 
  }

  get canRefundDepartmentPayment() : boolean {

  	return ['departmentPresident'].indexOf(this.as.userRole) > -1;
  }

  get canRefundFacultyPayment() : boolean {

  	return ['facultyPresident'].indexOf(this.as.userRole) > -1;
  }

  get userDepartment() : string {

    return this.as.userDepartment;
  }

  get userFaculty() : string {

    return this.as.userFaculty;
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
