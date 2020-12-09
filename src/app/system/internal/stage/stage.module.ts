import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageRoutingModule } from './stage-routing.module';

import { InternalAllModule } from '../internal-all/internal-all.module';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    InternalAllModule,
    StageRoutingModule,
  ],

  providers : [

  ],

  exports : [
  ]
})
export class StageModule { }
