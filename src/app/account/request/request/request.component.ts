import { Component , OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from '../../../animations';

@Component({

  'selector' : 'app-request',

  'templateUrl' : './request.component.html',

  'styleUrls' : ['./request.component.css'] ,

  'animations' : [slideInAnimation]

})

export class RequestComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

   getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
