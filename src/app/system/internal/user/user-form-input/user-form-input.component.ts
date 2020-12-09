import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { General } from '../../general';

import { User } from '../user';

@Component({

  'selector' : 'app-user-form-input',

  'templateUrl' : './user-form-input.component.html',

  'styleUrls' : ['./user-form-input.component.css']

})

export class UserFormInputComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {

    console.log(this.generalOthers);
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public entry : User;

  @Input('general-others') public generalOthers : General;

  @Input('first-name') public firstName : FormControl;

  @Input('last-name') public lastName : FormControl;

  @Input('user-name') public username : FormControl;

  @Input('email-address') public emailAddress : FormControl;

  @Input() public password : FormControl;

  @Input('confirm-password') public confirmPassword : FormControl;

  @Input() public about : FormControl;

  @Input() public faculty : FormControl;

  @Input() public department : FormControl;

  @Input() public level : FormControl;

  @Input() public country : FormControl;

  @Input() public unit : FormControl;

  @Input() public role : FormControl;

  @Input() public roles : General;

  @Input() public status : FormControl;

  @Input('matriculation-number') public matriculationNumber : FormControl;

  @Input('jamb-registration-number') public jambRegistrationNumber : FormControl;

  @Input('identity-number') public identityNumber : FormControl; 

}
