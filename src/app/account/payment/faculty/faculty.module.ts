import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneralModule } from '../../../general/general.module';
import { SimplesModule } from '../../../shared/simples/simples.module';
import { GeneralPaymentModule } from '../../../shared/general-payment/general-payment.module';

import { FacultyService } from './faculty.service';
import { FacultyFormService } from './faculty-form.service';

import { FacultyComponent } from './faculty/faculty.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { FacultyPaymentEntriesComponent } from './faculty-payment-entries/faculty-payment-entries.component';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyPaymentValidationComponent } from './faculty-payment-validation/faculty-payment-validation.component';
import { FacultyPaymentEntryDetailComponent } from './faculty-payment-entry-detail/faculty-payment-entry-detail.component';
import { FacultyPaymentEntryCreateComponent } from './faculty-payment-entry-create/faculty-payment-entry-create.component';


@NgModule({
  declarations: [

  FacultyComponent, 
  FacultyDashboardComponent,
  FacultyPaymentEntriesComponent,
  FacultyPaymentValidationComponent,
  FacultyPaymentEntryDetailComponent,
  FacultyPaymentEntryCreateComponent,

  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneralModule,
    SimplesModule,
    GeneralPaymentModule,
    FacultyRoutingModule
  ],

  providers : [

  ]


})
export class FacultyModule { 

}
