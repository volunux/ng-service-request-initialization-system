import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentRoutingModule } from './department-routing.module';

import { InternalAllModule } from '../internal-all/internal-all.module';


@NgModule({
  declarations: [

],

  imports: [
    CommonModule,
    InternalAllModule,
    DepartmentRoutingModule,
  ],

  providers : [

  ],

  exports : [
  ]

})

export class DepartmentModule { 

}
