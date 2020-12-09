import { Component , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-department-dashboard',

  'templateUrl' : './department-dashboard.component.html',

  'styleUrls' : ['./department-dashboard.component.css']

})

export class DepartmentDashboardComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  public systemType : string = `Department Fee`;

  public view : string = `dp`;

  public title : string = `${this.systemType} Payment`;

}
