import { Component , OnInit , Input } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({

  'selector' : 'app-user-validator',

  'templateUrl' : './user-validator.component.html',

  'styleUrls' : ['./user-validator.component.css']

})

export class UserValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('first-name') public firstName : FormControl;

  @Input('last-name') public lastName : FormControl;

  @Input('user-name') public username : FormControl;

  @Input('email-address') public emailAddress : FormControl;

  @Input() public about : FormControl;

  @Input() public faculty : FormControl;

  @Input() public department : FormControl;

  @Input() public level : FormControl;

  @Input() public unit : FormControl;

  @Input() public country : FormControl;

  @Input() public role : FormControl;

  @Input() public status : FormControl;

  @Input('matriculation-number') public matriculationNumber : FormControl;

  @Input('identity-number') public identityNumber : FormControl;

  @Input('jamb-registration-number') public jambRegistrationNumber : FormControl;

  @Input() public password : FormControl;

  @Input('confirm-password') public confirmPassword : FormControl;

  @Input() public num : FormControl;

  @Input('no-edit') public noEdit : boolean;


}
