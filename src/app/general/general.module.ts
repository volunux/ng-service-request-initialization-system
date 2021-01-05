import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ResourceUnavailableComponent } from './resource-unavailable/resource-unavailable.component';
import { NotificationScreenComponent } from './notification-screen/notification-screen.component';
import { ListEntryOptionsComponent } from './list-entry-options/list-entry-options.component';
import { DeleteAllEntryComponent } from './delete-all-entry/delete-all-entry.component';
import { ViewDescriptionComponent } from './view-description/view-description.component';
import { SearchComponent } from './search/search.component';

import { GeneralFormService } from './general-form.service';
import { GeneralServicesModule } from '../shared/services/general-services.module';
import { GeneralFormValidatorsComponent } from './general-form-validators/general-form-validators.component';


@NgModule({

  declarations: [

      ResourceUnavailableComponent,
      NotificationScreenComponent,
      ListEntryOptionsComponent,
      DeleteAllEntryComponent,
      ViewDescriptionComponent,
      SearchComponent,
      GeneralFormValidatorsComponent,
		],

  imports: [
    CommonModule,
    GeneralServicesModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],

  exports : [
    NotificationScreenComponent,
    ResourceUnavailableComponent,
    ListEntryOptionsComponent,
    DeleteAllEntryComponent,
    ViewDescriptionComponent,
    SearchComponent

  ] ,

  providers : [

    GeneralFormService
  ]
 
})

export class GeneralModule { 

}
