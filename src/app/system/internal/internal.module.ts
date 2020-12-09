import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InternalRoutingModule } from './internal-routing.module';
import { InternalDashboardComponent } from './internal-dashboard/internal-dashboard.component';
import { InternalComponent } from './internal/internal.component';



@NgModule({
  declarations: [

  InternalDashboardComponent,
  InternalComponent,

  ],

  imports: [
  
    CommonModule,
    InternalRoutingModule
  ] ,

  providers : [

  ]
})

export class InternalModule { 

}
