import { Component , Input , OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { fadeAnimation } from '../../animations';

@Component({

  'selector' : 'app-general-form-validators',

  'templateUrl' : './general-form-validators.component.html',

  'styleUrls' : ['./general-form-validators.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralFormValidatorsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public search : FormControl;

}
