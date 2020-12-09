import { Component , OnInit } from '@angular/core';

import { General } from '../../general';

@Component({

  'selector' : 'app-faculty-payment-entries',

  'templateUrl' : './faculty-payment-entries.component.html',

  'styleUrls' : ['./faculty-payment-entries.component.css']

})

export class FacultyPaymentEntriesComponent implements OnInit {

  constructor() { 

  }

  public systemType : string = 'Faculty Fee';

  public title : string = `${this.systemType} Entries`;

  public view : string = 'fp';

  public viewWord : string = 'Faculty';

  public link : string = 'faculty';

  public $link : string = 'faculty-payment';

  public searchFilters : General = {

  	'paymentReference' : 'Payment Reference' , 

  	'faculty' : 'Faculty' , 

    'status' : 'Status'};

  ngOnInit(): void {
  
  }

}
