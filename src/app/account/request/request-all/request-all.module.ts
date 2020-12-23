import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GeneralRequestModule } from '../../../shared/general-request/general-request.module';
import { GeneralAllModule } from '../../../shared/general-all/general-all.module';

import { RequestAllEntryComponent } from './request-all-entry/request-all-entry.component';
import { RequestAllDashboardComponent } from './request-all-dashboard/request-all-dashboard.component';
import { RequestEntriesComponent } from './request-entries/request-entries.component';
import { RequestEntryDetailComponent } from './request-entry-detail/request-entry-detail.component';
import { RequestEntryCreateComponent } from './request-entry-create/request-entry-create.component';
import { RequestEntryTimelineComponent } from './request-entry-timeline/request-entry-timeline.component';
import { RequestEntryTransferComponent } from './request-entry-transfer/request-entry-transfer.component';
import { RequestEntryCommentComponent } from './request-entry-comment/request-entry-comment.component';
import { RequestEntryReplyComponent } from './request-entry-reply/request-entry-reply.component';
import { RequestAllDeleteAllComponent } from './request-all-delete-all/request-all-delete-all.component';


@NgModule({

  declarations: [

  RequestAllEntryComponent,
	RequestAllDashboardComponent,
	RequestEntriesComponent,
	RequestEntryDetailComponent,
	RequestEntryCreateComponent,
	RequestEntryTimelineComponent,
	RequestEntryTransferComponent,
	RequestEntryCommentComponent,
	RequestEntryReplyComponent,
	RequestAllDeleteAllComponent
  ],

  imports: [
    CommonModule,
    GeneralAllModule,
    GeneralRequestModule,
    RouterModule.forChild([])

  ],

  providers : [

  ]

})

export class RequestAllModule { 

}
