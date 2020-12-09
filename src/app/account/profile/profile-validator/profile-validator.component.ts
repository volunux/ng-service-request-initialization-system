import { Component , Input , OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  
  'selector' : 'app-profile-validator',
  
  'templateUrl' : './profile-validator.component.html',
  
  'styleUrls' : ['./profile-validator.component.css']

})

export class ProfileValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('system-type') systemType : string;

  @Input() firstName : FormControl;

  @Input() lastName : FormControl;

  @Input() emailAddress : FormControl;

  @Input() country : FormControl;

  @Input() level : FormControl;

  @Input() identityNumber : FormControl;

  @Input() password : FormControl;

  @Input() newPassword : FormControl;

  @Input() confirmPassword : FormControl;

}
