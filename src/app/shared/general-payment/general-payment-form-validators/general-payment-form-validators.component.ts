import { Component , Input , OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({

  'selector' : 'app-general-payment-form-validators',

  'templateUrl' : './general-payment-form-validators.component.html',

  'styleUrls' : ['./general-payment-form-validators.component.css']

})

export class GeneralPaymentFormValidatorsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('payer-name') public payerName : FormControl;

  @Input('payer-email') public payerEmail : FormControl;

  @Input('payer-phone') public payerPhone : FormControl;

  @Input() public description : FormControl;

  @Input() public amt : FormControl;

  @Input() public search : FormControl;

}
