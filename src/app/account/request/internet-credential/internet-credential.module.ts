import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestAllModule } from '../request-all/request-all.module';
import { InternetCredentialRoutingModule } from './internet-credential-routing.module';

@NgModule({
  declarations: [


  ],
 
  imports: [
    CommonModule,
    RequestAllModule,
    InternetCredentialRoutingModule
  ],

  providers : [

  ]

})

export class InternetCredentialModule { 

}
