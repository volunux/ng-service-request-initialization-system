import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ResourceUnavailableComponent } from './resource-unavailable/resource-unavailable.component';


@NgModule({

  declarations: [

      ResourceUnavailableComponent
		],

  imports: [
    CommonModule
  ],

  exports : [

    ResourceUnavailableComponent
  ]

})

export class GeneralModule { }
