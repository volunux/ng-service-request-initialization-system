import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentAllModule } from '../payment-all/payment-all.module';

import { DepartmentPaymentRoutingModule } from './department-payment-routing.module';


@NgModule({

  declarations: [],
  
  imports: [
    CommonModule,
    PaymentAllModule,
    DepartmentPaymentRoutingModule
  ]

})

export class DepartmentPaymentModule { 

}
