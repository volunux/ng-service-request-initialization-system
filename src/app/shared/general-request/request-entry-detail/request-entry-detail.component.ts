import { Component , Input , OnInit } from '@angular/core';

import { GeneralRequest } from '../request';

@Component({

  'selector' : 'app-request-entry-detail',

  'templateUrl' : './request-entry-detail.component.html',

  'styleUrls' : ['./request-entry-detail.component.css'] ,

})

export class RequestEntryDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public entry : GeneralRequest;

  @Input() public view : string;

}
