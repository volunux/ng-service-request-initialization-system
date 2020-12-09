import { Component , Input , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-faculty-payment-validation',

  'templateUrl' : './faculty-payment-validation.component.html',

  'styleUrls' : ['./faculty-payment-validation.component.css'] ,

})

export class FacultyPaymentValidationComponent implements OnInit {

  constructor() {

  }

  public systemType : string = 'Faculty Fee';

  public title : string = `Make ${this.systemType} Fee Payment`;

  public view : string = 'fp';

  public viewWord : string = 'Faculty';

  public link : string = 'faculty';

  public $link : string = 'faculty-payment';

  ngOnInit() : void {

   }

}
