import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GeneralAllModule } from '../../../shared/general-all/general-all.module';
import { GeneralModule } from '../../../general/general.module';
import { GeneralPaymentModule } from '../../../shared/general-payment/general-payment.module';

import { PaymentAllDashboardComponent } from './payment-all-dashboard/payment-all-dashboard.component';
import { PaymentAllComponent } from './payment-all/payment-all.component';
import { PaymentAllEntriesComponent } from './payment-all-entries/payment-all-entries.component';
import { PaymentAllEntryCreateComponent } from './payment-all-entry-create/payment-all-entry-create.component';
import { PaymentAllEntryDetailComponent } from './payment-all-entry-detail/payment-all-entry-detail.component';
import { PaymentAllValidationComponent } from './payment-all-validation/payment-all-validation.component';
import { PaymentAllDeleteAllComponent } from './payment-all-delete-all/payment-all-delete-all.component';



@NgModule({

  declarations: [
  PaymentAllDashboardComponent, 
  PaymentAllComponent,
  PaymentAllEntriesComponent,
  PaymentAllEntryCreateComponent,
  PaymentAllEntryDetailComponent,
  PaymentAllValidationComponent,
  PaymentAllDeleteAllComponent],

  imports: [
    CommonModule,
    GeneralModule,
    GeneralAllModule,
    GeneralPaymentModule,
    RouterModule.forChild([])
  ]
})
export class PaymentAllModule { 

}
