import { Component , OnInit } from '@angular/core';

import { General } from '../../general';

@Component({

  'selector' : 'app-department-payment-entries',

  'templateUrl' : './department-payment-entries.component.html',

  'styleUrls' : ['./department-payment-entries.component.css']

})

export class DepartmentPaymentEntriesComponent implements OnInit {

  constructor() { 

  }

  public systemType : string = 'Department Fee';

  public title : string = `${this.systemType} Entries`;

  public view : string = 'dp';

  public viewWord : string = 'Department';

  public link : string = 'department';

  public $link : string = 'department-payment';

  public searchFilters : General = {

  	'paymentReference' : 'Payment Reference' , 

  	'department' : 'Department' , 

    'status' : 'Status'};

  ngOnInit(): void {
  
  }

}
