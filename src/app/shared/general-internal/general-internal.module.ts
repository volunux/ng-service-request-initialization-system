import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SimplesModule } from '../simples/simples.module';
import { GeneralServicesModule } from '../services/general-services.module';
import { GeneralModule } from '../../general/general.module';

import { GeneralInternalFormValidatorsComponent } from './general-internal-form-validators/general-internal-form-validators.component';
import { GeneralInternalEntryDeleteComponent } from './general-internal-entry-delete/general-internal-entry-delete.component';
import { GeneralInternalEntriesComponent } from './general-internal-entries/general-internal-entries.component';
import { GeneralInternalEntryDetailComponent } from './general-internal-entry-detail/general-internal-entry-detail.component';
import { GeneralInternalEntryCreateComponent } from './general-internal-entry-create/general-internal-entry-create.component';
import { GeneralInternalEntryUpdateComponent } from './general-internal-entry-update/general-internal-entry-update.component';


import { GeneralInternalService } from './general-internal.service'
import { GeneralInternalFormService } from './general-internal-form.service';
import { GeneralInternalFormInputComponent } from './general-internal-form-input/general-internal-form-input.component';

@NgModule({

  declarations: [

  GeneralInternalFormValidatorsComponent,
  GeneralInternalEntryDeleteComponent,
  GeneralInternalEntriesComponent,
  GeneralInternalEntryDetailComponent,
  GeneralInternalEntryCreateComponent,
  GeneralInternalEntryUpdateComponent,
  GeneralInternalFormInputComponent

  ],
  
  imports: [
  
    CommonModule,
    ReactiveFormsModule,
    SimplesModule,
    GeneralServicesModule,
    GeneralModule,
    RouterModule.forChild([]) ,
  
  ] ,

  providers : [

    GeneralInternalService,
    GeneralInternalFormService,
  
  ],

  exports : [

  GeneralInternalFormValidatorsComponent,
  GeneralInternalEntryDeleteComponent,
  GeneralInternalEntriesComponent,
  GeneralInternalEntryDetailComponent,
  GeneralInternalEntryCreateComponent,
  GeneralInternalEntryUpdateComponent

  ]

})

export class GeneralInternalModule { 

}
