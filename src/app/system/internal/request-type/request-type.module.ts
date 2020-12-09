import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestTypeRoutingModule } from './request-type-routing.module';

import { InternalAllModule } from '../internal-all/internal-all.module';

@NgModule({
  declarations: [


  ],

  imports: [
    CommonModule,
    InternalAllModule,
    RequestTypeRoutingModule,
  ],

  providers : [

  ],

  exports : [
  ]

})

export class RequestTypeModule { 

}
