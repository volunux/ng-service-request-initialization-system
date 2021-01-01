import { Component , Input , OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-general-thesis-form-validators',

  'templateUrl' : './general-thesis-form-validators.component.html',

  'styleUrls' : ['./general-thesis-form-validators.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralThesisFormValidatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  @Input('system-type') public systemType : string;

  @Input('author-name') public authorName : FormControl;

  @Input() public title : FormControl;

  @Input('date-published') public datePublished : FormControl;

  @Input() public num : FormControl;

  @Input() public status : FormControl;

  @Input() public description : FormControl;

  @Input() public faculty : FormControl;

  @Input() public department : FormControl;
 
  @Input() public search : FormControl;

}
