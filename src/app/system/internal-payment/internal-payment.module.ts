import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralModule } from '../../general/general.module'

import { InternalPaymentRoutingModule } from './internal-payment-routing.module';
import { InternalPaymentComponent } from './internal-payment/internal-payment.component';
import { InternalPaymentDashboardComponent } from './internal-payment-dashboard/internal-payment-dashboard.component';


@NgModule({
  
  declarations: [

  	InternalPaymentComponent,
  	InternalPaymentDashboardComponent

  ],
  
  imports: [
    CommonModule,
    GeneralModule,
    InternalPaymentRoutingModule
  ]
})

export class InternalPaymentModule { }
