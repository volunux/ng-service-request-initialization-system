import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRoutingModule } from './faculty-routing.module';

import { InternalAllModule } from '../internal-all/internal-all.module';

@NgModule({
  declarations: [


],

  imports: [
    CommonModule,
    InternalAllModule,
    FacultyRoutingModule,
  ],

  providers : [

  ],

  exports : [
  ]

})

export class FacultyModule { 

}
