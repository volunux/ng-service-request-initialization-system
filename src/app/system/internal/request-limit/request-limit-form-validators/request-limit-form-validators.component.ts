import { Component , Input , OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({

  'selector' : 'app-request-limit-form-validators',

  'templateUrl' : './request-limit-form-validators.component.html',

  'styleUrls' : ['./request-limit-form-validators.component.css']

})

export class RequestLimitFormValidatorsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public author : FormControl;

  @Input() public numberRemaining : FormControl;

  @Input() public status : FormControl;

}
