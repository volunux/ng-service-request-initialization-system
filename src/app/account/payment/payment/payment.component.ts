import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from '../../../animations';

@Component({

  'selector' : 'app-payment',

  'templateUrl' : './payment.component.html',

  'styleUrls' : ['./payment.component.css'] ,

  'animations' : [slideInAnimation]

})

export class PaymentComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

   getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
