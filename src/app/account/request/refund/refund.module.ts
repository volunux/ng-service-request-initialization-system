import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../../general/general.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralRequestModule } from '../../../shared/general-request/general-request.module';
import { SimplesModule } from '../../../shared/simples/simples.module';
import { PipesModule } from '../../../shared/pipes/pipes.module';


import { RefundRoutingModule } from './refund-routing.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';

import { RefundEntriesComponent } from './refund-entries/refund-entries.component';
import { RefundDetailComponent } from './refund-detail/refund-detail.component';
import { RefundLetterComponent } from './refund-letter/refund-letter.component';

import { FroalaEditorService } from './froala-editor.service';
import { RefundService } from './refund.service';
import { RefundFormService } from './refund-form.service';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StageOneTwoFiveComponent } from './stage-one-two-five/stage-one-two-five.component';
import { StageThreeComponent } from './stage-three/stage-three.component';
import { StageFourComponent } from './stage-four/stage-four.component';

import { SignatureComponent } from './signature/signature.component';
import { RefundEditorComponent } from './refund-editor/refund-editor.component';



@NgModule({

  declarations: [

    RefundDetailComponent,
  	RefundDetailComponent,
  	RefundEntriesComponent,
  	RefundLetterComponent,
  	StudentDetailComponent,
  	StageOneTwoFiveComponent,
  	StageThreeComponent,
  	StageFourComponent,
  	SignatureComponent,
  	RefundEditorComponent

	],

  imports: [
    CommonModule,
    ReactiveFormsModule,
		GeneralModule,
		GeneralRequestModule,
		SimplesModule,
    PipesModule,
    GeneralServicesModule,
    RefundRoutingModule
  ] ,

  providers : [

    RefundService,
    RefundFormService,
    FroalaEditorService
  ]

})

export class RefundModule { 

}
