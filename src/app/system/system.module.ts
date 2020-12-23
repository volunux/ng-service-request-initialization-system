import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system/system.component';
import { SystemDashboardComponent } from './system-dashboard/system-dashboard.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [

  	SystemComponent,
  	SystemDashboardComponent,
  	PaymentComponent,

  	],
  
  imports: [
    CommonModule,
    SystemRoutingModule,
  ]
})
export class SystemModule { }
