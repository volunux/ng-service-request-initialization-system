import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralAllEntryDeleteAllComponent } from './general-all-entry-delete-all/general-all-entry-delete-all.component';

import { GeneralAllService } from './general-all.service';
import { GeneralModule } from '../../general/general.module';


@NgModule({

  declarations: [

  	GeneralAllEntryDeleteAllComponent

  ],

  imports: [
    CommonModule,
    GeneralModule
  ] ,

  providers : [

		GeneralAllService
  ],

  exports : [

    GeneralAllEntryDeleteAllComponent
  ]

})

export class GeneralAllModule { }
