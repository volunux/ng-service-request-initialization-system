import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SimplesModule } from '../../../shared/simples/simples.module';
import { InternalAllModule } from '../internal-all/internal-all.module';
import { GeneralModule } from '../../../general/general.module';

import { RequestLimitService } from './request-limit.service';
import { RequestLimitFormService } from './request-limit-form.service';

import { RequestLimitRoutingModule } from './request-limit-routing.module';
import { RequestLimitEntriesComponent } from './request-limit-entries/request-limit-entries.component';
import { RequestLimitEntryDetailComponent } from './request-limit-entry-detail/request-limit-entry-detail.component';
import { RequestLimitEntryUpdateComponent } from './request-limit-entry-update/request-limit-entry-update.component';
import { RequestLimitFormValidatorsComponent } from './request-limit-form-validators/request-limit-form-validators.component';


@NgModule({

  declarations: [
  RequestLimitEntriesComponent,
  RequestLimitEntryDetailComponent,
  RequestLimitEntryUpdateComponent,
  RequestLimitFormValidatorsComponent,

 	],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneralModule,
    InternalAllModule,
    SimplesModule,
    RequestLimitRoutingModule
  ],
  providers : [
  	RequestLimitService,
    RequestLimitFormService
  ]

})

export class RequestLimitModule { 

}
