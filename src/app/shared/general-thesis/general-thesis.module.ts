import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SimplesModule } from '../simples/simples.module';
import { GeneralServicesModule } from '../services/general-services.module';
import { GeneralModule } from '../../general/general.module';
import { GeneralDirectivesModule } from '../general-directives/general-directives.module';

import { GeneralThesisEntriesComponent } from './general-thesis-entries/general-thesis-entries.component';
import { GeneralThesisEntryDetailComponent } from './general-thesis-entry-detail/general-thesis-entry-detail.component';
import { GeneralThesisEntryUpdateComponent } from './general-thesis-entry-update/general-thesis-entry-update.component';
import { GeneralThesisEntryDeleteComponent } from './general-thesis-entry-delete/general-thesis-entry-delete.component';
import { GeneralThesisFormInputsComponent } from './general-thesis-form-inputs/general-thesis-form-inputs.component';
import { GeneralThesisFormValidatorsComponent } from './general-thesis-form-validators/general-thesis-form-validators.component';
import { GeneralThesisEntryCreateComponent } from './general-thesis-entry-create/general-thesis-entry-create.component';

import { GeneralThesisService } from './general-thesis.service';
import { GeneralThesisFormService } from './general-thesis-form.service';

@NgModule({
  declarations: [
  	GeneralThesisEntriesComponent,
  	GeneralThesisEntryDetailComponent,
  	GeneralThesisEntryUpdateComponent,
  	GeneralThesisEntryDeleteComponent,
  	GeneralThesisFormInputsComponent,
  	GeneralThesisFormValidatorsComponent,
  	GeneralThesisEntryCreateComponent

  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SimplesModule,
    GeneralServicesModule,
    GeneralModule,
    GeneralDirectivesModule,
    RouterModule.forChild([]) ,
  ] ,

  providers : [

    GeneralThesisService,
    GeneralThesisFormService
  ],

  exports : [

    GeneralThesisEntriesComponent,
    GeneralThesisEntryDetailComponent,
    GeneralThesisEntryUpdateComponent,
    GeneralThesisEntryDeleteComponent,
    GeneralThesisFormInputsComponent,
    GeneralThesisFormValidatorsComponent,
    GeneralThesisEntryCreateComponent
  ]

})

export class GeneralThesisModule { 

}
