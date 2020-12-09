import { Component , Input , OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({

  'selector' : 'app-general-internal-form-validators',

  'templateUrl' : './general-internal-form-validators.component.html',

  'styleUrls' : ['./general-internal-form-validators.component.css']

})

export class GeneralInternalFormValidatorsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public name : FormControl;

  @Input() public num : FormControl;

  @Input() public shortCode : FormControl;

  @Input() public status : FormControl;

  @Input() public description : FormControl;

  @Input() public faculty : FormControl;

  @Input('request-username') public requestUsername : FormControl;

  @Input('request-password') public requestPassword : FormControl;
 
  @Input() public search : FormControl;

}
