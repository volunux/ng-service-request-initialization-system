import { Component , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-faculty-dashboard',

  'templateUrl' : './faculty-dashboard.component.html',

  'styleUrls' : ['./faculty-dashboard.component.css']

})

export class FacultyDashboardComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  public systemType : string = `Faculty Fee`;

  public view : string = `dp`;

  public title : string = `${this.systemType} Payment`;

}
