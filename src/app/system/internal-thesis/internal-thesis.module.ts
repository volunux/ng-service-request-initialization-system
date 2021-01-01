import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalThesisRoutingModule } from './internal-thesis-routing.module';
import { InternalThesisEntriesComponent } from './internal-thesis-entries/internal-thesis-entries.component';
import { InternalThesisEntryUpdateComponent } from './internal-thesis-entry-update/internal-thesis-entry-update.component';
import { InternalThesisComponent } from './internal-thesis/internal-thesis.component';
import { InternalThesisDashboardComponent } from './internal-thesis-dashboard/internal-thesis-dashboard.component';
import { InternalThesisEntryDeleteComponent } from './internal-thesis-entry-delete/internal-thesis-entry-delete.component';
import { InternalThesisEntryDetailComponent } from './internal-thesis-entry-detail/internal-thesis-entry-detail.component';
import { InternalThesisEntryCreateComponent } from './internal-thesis-entry-create/internal-thesis-entry-create.component';
import { InternalThesisEntryDeleteAllComponent } from './internal-thesis-entry-delete-all/internal-thesis-entry-delete-all.component';

import { GeneralThesisModule } from '../../shared/general-thesis/general-thesis.module';

@NgModule({
  declarations: [
  InternalThesisEntriesComponent,
  InternalThesisEntryUpdateComponent,
  InternalThesisComponent,
  InternalThesisDashboardComponent,
  InternalThesisEntryDeleteComponent,
  InternalThesisEntryDetailComponent,
  InternalThesisEntryCreateComponent,
  InternalThesisEntryDeleteAllComponent

  ],

  imports: [
    CommonModule,
    GeneralThesisModule,
    InternalThesisRoutingModule
  ]

})

export class InternalThesisModule { 

}
