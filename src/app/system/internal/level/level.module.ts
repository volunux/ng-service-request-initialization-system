import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelRoutingModule } from './level-routing.module';

import { InternalAllModule } from '../internal-all/internal-all.module';

@NgModule({
  declarations: [


],

  imports: [
    CommonModule,
    InternalAllModule,
    LevelRoutingModule,
  ],
  
  providers : [

  ],

  exports : [
  ]
})
export class LevelModule { }
