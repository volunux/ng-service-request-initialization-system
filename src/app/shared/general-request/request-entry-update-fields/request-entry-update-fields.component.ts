import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { GeneralRequest } from '../request';

@Component({

  'selector' : 'app-request-entry-update-fields',

  'templateUrl' : './request-entry-update-fields.component.html',

  'styleUrls' : ['./request-entry-update-fields.component.css']

})

export class RequestEntryUpdateFieldsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('request-username') public requestUsername : FormControl;

  @Input('request-password') public requestPassword : FormControl;

  @Input('generate-cred') public generateCred : string;

  @Input() public entry : GeneralRequest;

  @Input() public status : FormControl;

  @Input() public text : FormControl;

}
