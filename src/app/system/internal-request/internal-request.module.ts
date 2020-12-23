import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralModule } from '../../general/general.module';

import { InternalRequestRoutingModule } from './internal-request-routing.module';
import { InternalRequestComponent } from './internal-request/internal-request.component';
import { InternalRequestDashboardComponent } from './internal-request-dashboard/internal-request-dashboard.component';


@NgModule({
  declarations: [
  
  InternalRequestComponent, 
  InternalRequestDashboardComponent

  ],
  
  imports: [
    CommonModule,
    GeneralModule,
    InternalRequestRoutingModule
  ]

})

export class InternalRequestModule { 

}
