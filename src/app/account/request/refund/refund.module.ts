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


import { RefundService } from './refund.service';
import { RefundFormService } from './refund-form.service';
import { StageOneTwoFiveComponent } from './stage-one-two-five/stage-one-two-five.component';
import { StageThreeComponent } from './stage-three/stage-three.component';
import { StageFourComponent } from './stage-four/stage-four.component';

import { SignatureComponent } from './signature/signature.component';
import { FroalaInitializerDirective } from './froala-initializer.directive';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({

  declarations: [

    RefundDetailComponent,
  	RefundDetailComponent,
  	RefundEntriesComponent,
  	RefundLetterComponent,
  	StageOneTwoFiveComponent,
  	StageThreeComponent,
  	StageFourComponent,
  	SignatureComponent,
  	FroalaInitializerDirective

	],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot() ,
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
  ]

})

export class RefundModule { 

}
