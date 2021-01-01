import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { GeneralThesis } from '../general-thesis';

import { General } from '../../interfaces/general';

@Component({

  'selector' : 'app-general-thesis-form-inputs',

  'templateUrl' : './general-thesis-form-inputs.component.html',

  'styleUrls' : ['./general-thesis-form-inputs.component.css']

})

export class GeneralThesisFormInputsComponent implements OnInit {



  constructor() { }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('general-others') public generalOthers : General;

  @Input('author-name') public authorName : FormControl;

  @Input() public title : FormControl;

  @Input() public description : FormControl;

  @Input('date-published') public datePublished : FormControl;

  @Input() public num : FormControl;

  @Input() public entry : GeneralThesis;

  @Input() public status : FormControl;

  @Input() public faculty : FormControl;

  @Input() public department : FormControl;

  @Input() public placeholder : { [key : string] : any };

  @Input('no-edit') public noEdit : boolean;

}
