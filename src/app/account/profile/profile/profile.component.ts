import { Component , OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from '../../../animations';

@Component({
  
  'selector' : 'app-profile',
  
  'templateUrl' : './profile.component.html',
  
  'styleUrls' : ['./profile.component.css'] ,

  'animations' : [slideInAnimation]

})

export class ProfileComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
	}

   getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


}
