import { Component , Input , OnInit } from '@angular/core';

import { General } from '../../general';

@Component({

  'selector' : 'app-faculty-payment-entry-create',

  'templateUrl' : './faculty-payment-entry-create.component.html',

  'styleUrls' : ['./faculty-payment-entry-create.component.css']

})

export class FacultyPaymentEntryCreateComponent implements OnInit {

  constructor() { 

  }

  public systemType : string = 'Faculty Fee';

  public title : string = `Make ${this.systemType} Payment`;

  public view : string = 'fp';

  public viewWord : string = 'Faculty';

  public link : string = 'faculty';

  public $link : string = 'faculty-payment';

  public systemGuideline : string = 'payment';

  public paymentRule : General = {

    'amount' : '1500' ,

    'description' : 'Facultyal Fee Payment' ,

    'type' : 'faculty' ,

    'callback' : 'http://localhost:4200/payment/faculty/validation/' ,
  
  };

  ngOnInit(): void {
  
  }

}
