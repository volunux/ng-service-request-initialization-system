import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LowercaseDirective } from './lowercase.directive';
import { CapitalizeDirective } from './capitalize.directive';


@NgModule({
  declarations: [

  	LowercaseDirective,
  	CapitalizeDirective
  ],


  imports: [
    
    CommonModule
  ],

  exports : [

  	LowercaseDirective,
  	CapitalizeDirective
  ]

})

export class GeneralDirectivesModule { 

}
