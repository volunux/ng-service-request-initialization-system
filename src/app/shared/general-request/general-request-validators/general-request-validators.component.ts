import { Component , Input , OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-general-request-validators',

  'templateUrl' : './general-request-validators.component.html',

  'styleUrls' : ['./general-request-validators.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralRequestValidatorsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('system-type') systemType : string;

  @Input('request-username') public requestUsername : FormControl;

  @Input('request-password') public requestPassword : FormControl;

  @Input('main-body') public main_body : FormControl;

  @Input() public message : FormControl;

  @Input() public text : FormControl;

  @Input() public status : FormControl;

  @Input() public unit : FormControl;

  @Input() public commentAuthorName : FormControl;

  @Input() stage : FormControl;

  @Input() num : FormControl;

}
