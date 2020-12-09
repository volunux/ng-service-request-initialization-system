import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../../general/general.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralRequestModule } from '../../../shared/general-request/general-request.module';
import { SimplesModule } from '../../../shared/simples/simples.module';



import { QuillModule } from 'ngx-quill';

import { RefundRoutingModule } from './refund-routing.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';

import { RefundEntriesComponent } from './refund-entries/refund-entries.component';
import { RefundDetailComponent } from './refund-detail/refund-detail.component';
import { RefundLetterComponent } from './refund-letter/refund-letter.component';


import { RefundService } from './refund.service';
import { RefundFormService } from './refund-form.service';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { EntryOptionsComponent } from './entry-options/entry-options.component';
import { StageOneTwoFiveComponent } from './stage-one-two-five/stage-one-two-five.component';
import { StageThreeComponent } from './stage-three/stage-three.component';
import { StageFourComponent } from './stage-four/stage-four.component';

import { SignatureComponent } from './signature/signature.component';



@NgModule({

  declarations: [

    RefundDetailComponent,
  	RefundDetailComponent,
  	RefundEntriesComponent,
  	RefundLetterComponent,
  	RequestDetailComponent,
  	StudentDetailComponent,
  	EntryOptionsComponent,
  	StageOneTwoFiveComponent,
  	StageThreeComponent,
  	StageFourComponent,
  	SignatureComponent

	],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuillModule,
		GeneralModule,
		GeneralRequestModule,
		SimplesModule,
    GeneralServicesModule,
    RefundRoutingModule
  ] ,

  providers : [

    RefundService ,
    RefundFormService
  ]

})

export class RefundModule { 

}
