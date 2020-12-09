import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GeneralModule } from '../../../general/general.module';
import { GeneralInternalModule } from '../../../shared/general-internal/general-internal.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';

import { InternalEntryDashboardComponent } from './internal-entry-dashboard/internal-entry-dashboard.component';
import { InternalEntryDetailComponent } from './internal-entry-detail/internal-entry-detail.component';
import { InternalEntriesComponent } from './internal-entries/internal-entries.component';
import { InternalEntryDeleteAllComponent } from './internal-entry-delete-all/internal-entry-delete-all.component';
import { InternalEntryUpdateComponent } from './internal-entry-update/internal-entry-update.component';
import { InternalEntryCreateComponent } from './internal-entry-create/internal-entry-create.component';
import { InternalEntryComponent } from './internal-entry/internal-entry.component';
import { InternalEntryDeleteComponent } from './internal-entry-delete/internal-entry-delete.component';

import { InternalEntryDeleteAllGuard } from './internal-entry-delete-all/internal-entry-delete-all.guard';
import { InternalEntryUpdateGuard } from './internal-entry-update/internal-entry-update.guard';



@NgModule({
  declarations: [

  InternalEntryDashboardComponent,
  InternalEntryDetailComponent,
  InternalEntriesComponent,
  InternalEntryDeleteAllComponent,
  InternalEntryUpdateComponent,
  InternalEntryCreateComponent,
  InternalEntryComponent,
  InternalEntryDeleteComponent

  ],
  imports: [
    CommonModule,
    GeneralModule,
    GeneralInternalModule,
    GeneralServicesModule,
    RouterModule.forChild([])
  ] ,

  providers : [

    InternalEntryDeleteAllGuard,
    InternalEntryUpdateGuard
  ]
})
export class InternalAllModule { 

}
