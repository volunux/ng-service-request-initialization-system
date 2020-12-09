import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { GeneralRequest } from '../../request';

@Component({

  'selector' : 'app-stage-one-two-five',

  'templateUrl' : './stage-one-two-five.component.html',

  'styleUrls' : ['./stage-one-two-five.component.css']

})

export class StageOneTwoFiveComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('current-stage') public currentStage : string | number;

  @Input() public entry : GeneralRequest;

  @Input() public status : FormControl;

  @Input() public text : FormControl;

  @Input() public stage : FormControl;

}
