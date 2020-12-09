import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system/system.component';
import { SystemDashboardComponent } from './system-dashboard/system-dashboard.component';
import { RequestComponent } from './request/request.component';
import { PaymentComponent } from './payment/payment.component';
import { RequestModule } from './request/request.module';


@NgModule({
  declarations: [

  	SystemComponent,
  	SystemDashboardComponent,
  	RequestComponent,
  	PaymentComponent,

  	],
  
  imports: [
    CommonModule,
    SystemRoutingModule,
  ]
})
export class SystemModule { }
