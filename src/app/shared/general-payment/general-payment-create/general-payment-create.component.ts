import { Component , Input , OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup , FormControl } from '@angular/forms';

import { General } from '../../interfaces/general';

import { Payment } from '../payment';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

import { GeneralPaymentService } from '../general-payment.service';

import { GeneralPaymentFormService } from '../general-payment-form.service';

@Component({

  'selector' : 'app-general-payment-create',

  'templateUrl' : './general-payment-create.component.html',

  'styleUrls' : ['./general-payment-create.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class GeneralPaymentCreateComponent implements OnInit {

  constructor(public router : Router , public ns : NotificationService , public ems : ErrorMessagesService ,

  						private gps : GeneralPaymentService , private gpfs : GeneralPaymentFormService) {


  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input('system-guideline') public systemGuideline : string; 

  @Input('payment-rule') public paymentRule : General;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public fip : string = 'block';

  public submission : boolean = false;

  public entryForm : FormGroup;

  ngOnInit() : void {

    this.gps.$systemType = this.systemType;

    this.gps.$sa = this.$link;

      this.gps.addEntry()

    .subscribe((data : any) => {

      if (!data) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);	}

      if (data.permitted && data.$data && data.$data.status) { return this.router.navigate(['/payment' , this.link , 'entry' , 'detail' , data.$data._id  ]);  }

      if (data.permitted) {
        
        this.entryForm = this.gpfs.$entryForm();	

      	this.entryForm.patchValue({ 'description' : this.paymentRule.description , 'amt' : this.paymentRule.amount })		}		});

  };

  public createEntry(entry : any) {

		entry.amount = entry.amt * 100;

		entry.email = entry.payerEmail;

		entry.callback_url = this.paymentRule.callback;

  	entry.metadata = {

  			'fullName' : entry.payerName ,

  			'phoneNumber' : entry.payerPhone ,

  			'description' : this.paymentRule.description ,

  			'type' : this.paymentRule.type  };

    this.submission = true;

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.gps.$initializePayment(entry)

      .subscribe(($entry : any) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Network error has occured. Payment is only a possiblity when there is Internet connection.`);  }

       else if ($entry && $entry.created) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);

          return location.href = $entry.$data.data.authorization_url;  }   });
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

  get payerName() {

      return this.entryForm.get('payerName') as FormControl;
  }

  get payerEmail() {

      return this.entryForm.get('payerEmail') as FormControl;
  }

  get payerPhone() {

      return this.entryForm.get('payerPhone') as FormControl;
  }

  get description() {

      return this.entryForm.get('description') as FormControl;
  }

  get amt() {

      return this.entryForm.get('amt') as FormControl;
  }

  get isFormValid() {

    return this.entryForm.valid;
  }


}
