import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentDashboardComponent } from './payment-dashboard/payment-dashboard.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [

  PaymentDashboardComponent,

  PaymentComponent],
  
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]

})

export class PaymentModule { 

}
