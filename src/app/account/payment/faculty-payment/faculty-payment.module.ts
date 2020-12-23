import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentAllModule } from '../payment-all/payment-all.module';
import { FacultyPaymentRoutingModule } from './faculty-payment-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaymentAllModule,
    FacultyPaymentRoutingModule
  ]
})
export class FacultyPaymentModule { }
