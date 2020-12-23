import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { GeneralInternal } from '../general-internal';

import { General } from '../../interfaces/general';

@Component({
  
  'selector' : 'app-general-internal-form-input',
  
  'templateUrl' : './general-internal-form-input.component.html',
  
  'styleUrls' : ['./general-internal-form-input.component.css']

})

export class GeneralInternalFormInputComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {

  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('short-code') public shortCode : FormControl;

  @Input('general-others') public generalOthers : General;

  @Input() public _id : FormControl;

  @Input() public name : FormControl;

  @Input() public description : FormControl;

  @Input() public num : FormControl;

  @Input() public entry : GeneralInternal;

  @Input() public status : FormControl;

  @Input() public faculty : FormControl;

  @Input() public placeholder : { [key : string] : any };

  @Input('request-username') public requestUsername : FormControl;

  @Input('request-password') public requestPassword : FormControl;

  @Input('no-edit') public noEdit : boolean;

}
