import { Component , Input , OnInit } from '@angular/core';

import { General } from '../../general';

@Component({

  'selector' : 'app-department-payment-entry-create',

  'templateUrl' : './department-payment-entry-create.component.html',

  'styleUrls' : ['./department-payment-entry-create.component.css']

})

export class DepartmentPaymentEntryCreateComponent implements OnInit {

  constructor() { 

  }

  public systemType : string = 'Department Fee';

  public title : string = `Make ${this.systemType} Payment`;

  public view : string = 'dp';

  public viewWord : string = 'Department';

  public link : string = 'department';

  public $link : string = 'department-payment';

  public systemGuideline : string = 'payment';

  public paymentRule : General = {

    'amount' : '1000' ,

    'description' : 'Departmental Fee Payment' ,

    'type' : 'department' ,

    'callback' : 'http://localhost:4200/payment/department/validation/' ,
  
  };

  ngOnInit(): void {
  
  }

}
