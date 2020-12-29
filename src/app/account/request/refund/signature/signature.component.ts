import { Component , Input , OnInit } from '@angular/core';

import { GeneralRequest } from '../../request';

@Component({
  
  'selector' : 'app-signature',
  
  'templateUrl' : './signature.component.html',
  
  'styleUrls' : ['./signature.component.css'] ,

})

export class SignatureComponent implements OnInit {

  constructor() { 

  }

  @Input() public entry : GeneralRequest;

  ngOnInit() : void {
  
  }

}
