import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { General } from '../../interfaces/general';

import { User } from '../../interfaces/user';

@Component({

  'selector' : 'app-user-account-form-inputs',

  'templateUrl' : './user-account-form-inputs.component.html',

  'styleUrls' : ['./user-account-form-inputs.component.css']

})

export class UserAccountFormInputsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
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

  @Input() public statuses : General;

  @Input('matriculation-number') public matriculationNumber : FormControl;

  @Input('jamb-registration-number') public jambRegistrationNumber : FormControl;

  @Input('identity-number') public identityNumber : FormControl; 

  @Input('no-edit') public noEdit : boolean;

}
