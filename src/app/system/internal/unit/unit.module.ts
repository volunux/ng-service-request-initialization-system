import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { UnitRoutingModule } from './unit-routing.module';

import { InternalAllModule } from '../internal-all/internal-all.module';

@NgModule({
  declarations: [


],

  imports: [
    CommonModule,
    InternalAllModule,
    UnitRoutingModule,
  ],

  providers : [

  ],

  exports : [
  ]
})
export class UnitModule { }
