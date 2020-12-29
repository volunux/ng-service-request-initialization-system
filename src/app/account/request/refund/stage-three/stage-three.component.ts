import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { GeneralRequest } from '../../request';

@Component({

  'selector' : 'app-stage-three',

  'templateUrl' : './stage-three.component.html',

  'styleUrls' : ['./stage-three.component.css'] ,

})

export class StageThreeComponent implements OnInit {

  constructor() { 

  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('main-body') public main_body : FormControl;

  @Input('current-stage') public currentStage : string | number;

  @Input() public status : FormControl;

  @Input() public text : FormControl;

  @Input() public stage : FormControl;

  @Input() public entry : GeneralRequest;

  ngOnInit() : void {
  
  }

}
