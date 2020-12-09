import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { GeneralRequest } from '../../request';

@Component({

  'selector' : 'app-stage-four',

  'templateUrl' : './stage-four.component.html',

  'styleUrls' : ['./stage-four.component.css']

})

export class StageFourComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input() public entry : GeneralRequest;

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public status : FormControl;

  @Input() public text : FormControl;

  @Input() public stage : FormControl;

  @Input('current-stage') public currentStage : string | number;

}
