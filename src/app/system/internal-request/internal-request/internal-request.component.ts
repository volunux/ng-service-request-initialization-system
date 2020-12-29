import { Component , OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from '../../../animations';

@Component({

  'selector' : 'app-internal-request',

  'templateUrl' : './internal-request.component.html',

  'styleUrls' : ['./internal-request.component.css'] ,

  'animations' : [slideInAnimation]

})

export class InternalRequestComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

   getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
