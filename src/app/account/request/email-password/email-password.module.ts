import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestAllModule } from '../request-all/request-all.module';
import { EmailPasswordRoutingModule } from './email-password-routing.module';

@NgModule({
  declarations: [

  ],
 
  imports: [
    CommonModule,
    RequestAllModule,
    EmailPasswordRoutingModule
  ],

  providers : [

  ]

})

export class EmailPasswordModule { 

}
