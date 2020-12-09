import { Component , Input , OnInit } from '@angular/core';

import { GeneralRequest } from '../../request';

@Component({

  'selector' : 'app-student-detail',

  'templateUrl' : './student-detail.component.html',

  'styleUrls' : ['./student-detail.component.css']

})

export class StudentDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input() public entry : GeneralRequest;

}
