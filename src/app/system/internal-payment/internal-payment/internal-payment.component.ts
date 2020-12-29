import { Component , OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from '../../../animations';

@Component({

  'selector' : 'app-internal-payment',

  'templateUrl' : './internal-payment.component.html',

  'styleUrls' : ['./internal-payment.component.css'] ,

  'animations' : [slideInAnimation]

})

export class InternalPaymentComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

   getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
