import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../general/general.module';
import { SimplesModule } from '../simples/simples.module';

import { GeneralRequestService } from './general-request.service';
import { GeneralRequestFormService } from './general-request-form.service';
import { GenerateUsernamePasswordService } from './generate-username-password.service';

import { EntryOptionsComponent } from './entry-options/entry-options.component';
import { EntryUpdateComponent } from './entry-update/entry-update.component';
import { GeneralRequestValidatorsComponent } from './general-request-validators/general-request-validators.component';
import { RequestEntryDetailComponent } from './request-entry-detail/request-entry-detail.component';
import { RequestEntryUpdateFieldsComponent } from './request-entry-update-fields/request-entry-update-fields.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { RequestCommentDetailComponent } from './request-comment-detail/request-comment-detail.component';
import { CreateReplyComponent } from './create-reply/create-reply.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { EntryCreateComponent } from './entry-create/entry-create.component';

/*import { AttachmentUploadComponent } from './attachment-upload/attachment-upload.component';*/
import { EntryTimelineComponent } from './entry-timeline/entry-timeline.component';
import { EntryTransferComponent } from './entry-transfer/entry-transfer.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { GenerateUsernamePasswordComponent } from './generate-username-password/generate-username-password.component';
import { GeneratePasswordComponent } from './generate-password/generate-password.component';

@NgModule({

  declarations: [
  	EntryOptionsComponent,
  	EntryUpdateComponent,
  	GeneralRequestValidatorsComponent,
  	RequestEntryDetailComponent,
  	RequestEntryUpdateFieldsComponent,
  	RequestListComponent,
  	RequestStatusComponent,
  	RequestCommentDetailComponent,
  	CreateReplyComponent,
  	CreateCommentComponent,
  	EntryCreateComponent,
    EntryTimelineComponent,
    EntryTransferComponent,
    EntryDetailComponent,
    GenerateUsernamePasswordComponent,
    GeneratePasswordComponent,
  ],
  
  imports: [
    CommonModule,
    GeneralModule,
    SimplesModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),
  ],

  providers : [
    GeneralRequestService,
    GeneralRequestFormService,
    GenerateUsernamePasswordService,
  ],

  exports : [
  	EntryOptionsComponent,
  	EntryUpdateComponent,
  	GeneralRequestValidatorsComponent,
  	RequestEntryDetailComponent,
  	RequestEntryUpdateFieldsComponent,
    RequestListComponent,
    RequestStatusComponent,
    RequestCommentDetailComponent,
    CreateReplyComponent,
    CreateCommentComponent,
    EntryCreateComponent,
    EntryTimelineComponent,
    EntryTransferComponent,
    EntryDetailComponent,
  ]

})

export class GeneralRequestModule { 

}
