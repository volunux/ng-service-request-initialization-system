import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestAllModule } from '../request-all/request-all.module';
import { SchoolResultRoutingModule } from './school-result-routing.module';


@NgModule({
  declarations: [

  ],
 
  imports: [
    CommonModule,
    RequestAllModule,
    SchoolResultRoutingModule
  ],

  providers : [
  
  ]

})

export class SchoolResultModule { 

}
