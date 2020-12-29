import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestRoutingModule } from './request-routing.module';
import { GeneralModule } from '../../general/general.module';

import { RequestComponent } from './request/request.component';
import { RequestDashboardComponent } from './request-dashboard/request-dashboard.component';


@NgModule({

  declarations: [
  
		RequestComponent,
		RequestDashboardComponent,
	],
  
  imports: [
  
    CommonModule,
    GeneralModule,
    RequestRoutingModule,
  ],

})

export class RequestModule { 

}
