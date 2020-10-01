import { Component , OnInit , Input } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({

  'selector' : 'app-faculty-validator',

  'templateUrl' : './faculty-validator.component.html',

  'styleUrls' : ['./faculty-validator.component.css']

})

export class FacultyValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input() name : FormControl;

  @Input() shortCode : FormControl;

  @Input() num : FormControl;

}
