import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { GeneralRequest } from '../request';


@Component({

  'selector' : 'app-generate-password',

  'templateUrl' : './generate-password.component.html',

  'styleUrls' : ['./generate-password.component.css']

})

export class GeneratePasswordComponent implements OnInit {


  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('request-password') public requestPassword : FormControl;

  @Input('generate-cred') public generateCred : string;

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public entry : GeneralRequest;

  @Input() public status : FormControl;


  public createNewCredentials($evt) : any {
    
    $evt.stopPropagation();

    $evt.preventDefault();

		let newPassword = Math.random().toString(36).substr(2, 9);

		this.entryForm.patchValue({ 'requestPassword' : newPassword });

  }

}
