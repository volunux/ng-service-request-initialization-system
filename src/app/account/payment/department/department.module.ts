import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneralModule } from '../../../general/general.module';
import { SimplesModule } from '../../../shared/simples/simples.module';
import { GeneralPaymentModule } from '../../../shared/general-payment/general-payment.module';

import { DepartmentService } from './department.service';
import { DepartmentFormService } from './department-form.service';

import { DepartmentComponent } from './department/department.component';
import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';
import { DepartmentPaymentEntriesComponent } from './department-payment-entries/department-payment-entries.component';

import { DepartmentRoutingModule } from './department-routing.module';
import { PaymentValidationComponent } from './payment-validation/payment-validation.component';
import { DepartmentPaymentEntryDetailComponent } from './department-payment-entry-detail/department-payment-entry-detail.component';
import { DepartmentPaymentEntryCreateComponent } from './department-payment-entry-create/department-payment-entry-create.component';


@NgModule({
  declarations: [

  DepartmentComponent, 
  DepartmentDashboardComponent,
  DepartmentPaymentEntriesComponent,
  PaymentValidationComponent,
  DepartmentPaymentEntryDetailComponent,
  DepartmentPaymentEntryCreateComponent,

  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneralModule,
    SimplesModule,
    GeneralPaymentModule,
    DepartmentRoutingModule
  ],

  providers : [

  ]


})
export class DepartmentModule { 

}
