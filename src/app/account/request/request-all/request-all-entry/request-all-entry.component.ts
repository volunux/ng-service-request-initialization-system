import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-request-all-entry',

  'templateUrl' : './request-all-entry.component.html',

  'styleUrls' : ['./request-all-entry.component.css'] ,

  'animations' : [slideInAnimation] ,

})

export class RequestAllEntryComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

   getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
