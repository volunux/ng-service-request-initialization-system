import { Component , OnInit } from '@angular/core';

import { AuthenticationService } from '../../authentication/authentication.service';

@Component({

  'selector' : 'app-get-started',

  'templateUrl' : './get-started.component.html',

  'styleUrls' : ['./get-started.component.css']

})

export class GetStartedComponent implements OnInit {

  constructor(private aS : AuthenticationService) { 

  }

  ngOnInit() : void {
  
  }

  get isLoggedIn() : boolean {

		return this.aS.isLoggedIn();  	
  }

}
