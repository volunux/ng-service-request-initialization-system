import { Component , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-payment-dashboard',

  'templateUrl' : './payment-dashboard.component.html',

  'styleUrls' : ['./payment-dashboard.component.css']

})

export class PaymentDashboardComponent implements OnInit {

  constructor() { 

  }

  public systemType : string = 'Payment';

  public title : string = 'User Payment';
  
  public view : string = 'gen-internal';

  public entries : { [key : string] : string } = 

    { 'department' : 'Department' , 

    'faculty' : 'Faculty' };

  ngOnInit() : void {

  }

}
