import { Component , Input , OnInit } from '@angular/core';

import { GeneralRequest } from '../request';


@Component({

  'selector' : 'app-request-status',

  'templateUrl' : './request-status.component.html',

  'styleUrls' : ['./request-status.component.css']

})

export class RequestStatusComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input() public entry : GeneralRequest;

  @Input('system-type') public systemType : string;

}
