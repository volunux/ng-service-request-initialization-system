import { Component , Input , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-payment-validation',

  'templateUrl' : './payment-validation.component.html',

  'styleUrls' : ['./payment-validation.component.css'] ,

})

export class PaymentValidationComponent implements OnInit {

  constructor() {

  }

  public systemType : string = 'Department Fee';

  public title : string = `Make ${this.systemType} Fee Payment`;

  public view : string = 'dp';

  public viewWord : string = 'Department';

  public link : string = 'department';

  public $link : string = 'department-payment';

  ngOnInit() : void {

   }

}
