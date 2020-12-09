import { Component , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-faculty-payment-entry-detail',

  'templateUrl' : './faculty-payment-entry-detail.component.html',

  'styleUrls' : ['./faculty-payment-entry-detail.component.css']

})

export class FacultyPaymentEntryDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }


  public systemType : string = `Faculty Fee`;

  public title : string = `${this.systemType} Payment Entry`;

  public view : string = 'fp';

  public viewWord : string = 'Faculty';

  public link : string = 'faculty';

  public $link : string = 'faculty-payment';

}
