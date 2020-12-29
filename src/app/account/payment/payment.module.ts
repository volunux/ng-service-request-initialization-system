import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../general/general.module';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentDashboardComponent } from './payment-dashboard/payment-dashboard.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [

  PaymentDashboardComponent,
  PaymentComponent

  ],
  
  imports: [
    CommonModule,
    GeneralModule,
    PaymentRoutingModule
  ]

})

export class PaymentModule { 

}
