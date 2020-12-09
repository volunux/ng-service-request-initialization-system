import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralModule } from '../../general/general.module';
import { SimplesModule } from '../simples/simples.module';
import { GeneralServicesModule } from '../services/general-services.module';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GeneralPaymentEntriesComponent } from './general-payment-entries/general-payment-entries.component';

import { GeneralPaymentFormValidatorsComponent } from './general-payment-form-validators/general-payment-form-validators.component';
import { GeneralPaymentDetailComponent } from './general-payment-detail/general-payment-detail.component';
import { GeneralPaymentCreateComponent } from './general-payment-create/general-payment-create.component';

import { GeneralPaymentUpdateComponent } from './general-payment-update/general-payment-update.component';
import { GeneralPaymentSearchComponent } from './general-payment-search/general-payment-search.component';

import { GeneralPaymentService } from './general-payment.service';
import { GeneralPaymentFormService } from './general-payment-form.service';
import { GeneralPaymentVerificationComponent } from './general-payment-verification/general-payment-verification.component';

@NgModule({

  declarations: [

  GeneralPaymentFormValidatorsComponent,
  GeneralPaymentEntriesComponent,
  GeneralPaymentDetailComponent,
  GeneralPaymentCreateComponent,
  GeneralPaymentUpdateComponent,
  GeneralPaymentSearchComponent,
  GeneralPaymentVerificationComponent
  ],
  
  imports: [
    CommonModule,
    GeneralModule,
    SimplesModule,
    GeneralServicesModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ] ,

  exports : [

  GeneralPaymentEntriesComponent,
  GeneralPaymentDetailComponent,
  GeneralPaymentCreateComponent,
  GeneralPaymentVerificationComponent
  ] ,

  providers : [

    GeneralPaymentService,
    GeneralPaymentFormService
  ]



})

export class GeneralPaymentModule { 

}
