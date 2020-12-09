import { Component , ElementRef , Input , OnInit , ViewChild } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { GeneralRequest } from '../request';

import { Credentials } from '../credentials';

import { GenerateUsernamePasswordService } from '../generate-username-password.service';

@Component({

  'selector' : 'app-generate-username-password',

  'templateUrl' : './generate-username-password.component.html',

  'styleUrls' : ['./generate-username-password.component.css']

})

export class GenerateUsernamePasswordComponent implements OnInit {

  constructor(private gups : GenerateUsernamePasswordService) { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('request-username') public requestUsername : FormControl;

  @Input('request-password') public requestPassword : FormControl;

  @Input('generate-cred') public generateCred : string;

  @ViewChild('proposedCredential') public proposedCredential : ElementRef;

  @Input() public entry : GeneralRequest;

  @Input() public status : FormControl;

  public createNewCredentials($evt) : any {
    
    $evt.stopPropagation();

    $evt.preventDefault();

    let proposed = this.proposedCredential.nativeElement.value;

      this.gups.$createUsernamePassword({'requestUsername' : proposed})

        .subscribe(($entry : { [key : string] : Credentials }) => {

          if ($entry) {  this.entryForm.patchValue($entry.$data);  }  });

  }

}
