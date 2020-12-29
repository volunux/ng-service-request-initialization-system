import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ResourceUnavailableComponent } from './resource-unavailable/resource-unavailable.component';
import { NotificationScreenComponent } from './notification-screen/notification-screen.component';
import { ListEntryOptionsComponent } from './list-entry-options/list-entry-options.component';
import { DeleteAllEntryComponent } from './delete-all-entry/delete-all-entry.component';
import { CapitalizeDirective } from './capitalize.directive';
import { LowercaseDirective } from './lowercase.directive';
import { ViewDescriptionComponent } from './view-description/view-description.component';

import { GeneralServicesModule } from '../shared/services/general-services.module';


@NgModule({

  declarations: [

      ResourceUnavailableComponent,
      NotificationScreenComponent,
      ListEntryOptionsComponent,
      DeleteAllEntryComponent,
      CapitalizeDirective,
      LowercaseDirective,
      ViewDescriptionComponent
		],

  imports: [
    CommonModule,
    GeneralServicesModule,
    RouterModule.forChild([])
  ],

  exports : [
    NotificationScreenComponent,
    ResourceUnavailableComponent,
    ListEntryOptionsComponent,
    DeleteAllEntryComponent,
    CapitalizeDirective,
    LowercaseDirective,
    ViewDescriptionComponent,

  ]

})

export class GeneralModule { 

}
