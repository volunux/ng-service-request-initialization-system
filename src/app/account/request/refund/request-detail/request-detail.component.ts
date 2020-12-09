import { Component , Input , OnInit } from '@angular/core';

import { GeneralRequest } from '../../request';

@Component({

  'selector' : 'app-request-detail',

  'templateUrl' : './request-detail.component.html',

  'styleUrls' : ['./request-detail.component.css']

})

export class RequestDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input() public entry : GeneralRequest;

}
