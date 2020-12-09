import { Component , OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from './animations';

import { FormControl } from '@angular/forms';

import { AuthenticationService } from './authentication/authentication.service';

@Component({

  'selector' : 'app-root',
  
  'templateUrl' : './app.component.html',
  
  'styleUrls' : ['./app.component.css'] ,

  'animations' : [slideInAnimation] ,

})

export class AppComponent implements OnInit {

  title = 'Request and Service Initialization System';

  constructor(private authService : AuthenticationService) {


  }

  
  public token : string;

  public myDetails : any;

  public ngOnInit() : void {

    }

   getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
