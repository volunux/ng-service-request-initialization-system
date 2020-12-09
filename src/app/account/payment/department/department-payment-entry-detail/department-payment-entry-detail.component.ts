import { Component , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-department-payment-entry-detail',

  'templateUrl' : './department-payment-entry-detail.component.html',

  'styleUrls' : ['./department-payment-entry-detail.component.css']

})

export class DepartmentPaymentEntryDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }


  public systemType : string = `Department Fee`;

  public title : string = `${this.systemType} Payment Entry`;

  public view : string = 'dp';

  public viewWord : string = 'Department';

  public link : string = 'department';

  public $link : string = 'department-payment';

}
