import { Component, OnInit } from '@angular/core';

@Component({

  'selector' : 'app-internal-payment-dashboard',

  'templateUrl' : './internal-payment-dashboard.component.html',

  'styleUrls' : ['./internal-payment-dashboard.component.css']

})

export class InternalPaymentDashboardComponent implements OnInit {

  constructor() { 

  }

  public systemType : string = 'Payment';

  public title : string = 'User Payment';
  
  public view : string = 'gen-internal';

  public entries : { [key : string] : string } = 

    { 'department' : 'Department' , 

    'faculty' : 'Faculty' };

  ngOnInit(): void {
  
  }

}
