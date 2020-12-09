import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GeneralModule } from '../../general/general.module';
import { SimplesModule } from '../../shared/simples/simples.module';
import { GeneralRequestModule } from '../../shared/general-request/general-request.module';

import { RequestRoutingModule } from './request-routing.module';
import { CourseRegistrationModule } from './course-registration/course-registration.module';
import { InternetCredentialModule } from './internet-credential/internet-credential.module';
import { InternetPasswordModule } from './internet-password/internet-password.module';
import { EmailPasswordModule } from './email-password/email-password.module';
import { SchoolResultModule } from './school-result/school-result.module';
import { RefundModule } from './refund/refund.module';
import { RequestDashboardComponent } from './request-dashboard/request-dashboard.component';
import { RequestComponent } from './request/request.component';
import { RequestEntriesComponent } from './request-entries/request-entries.component';
import { RequestEntryDetailComponent } from './request-entry-detail/request-entry-detail.component';
import { RequestEntryCreateComponent } from './request-entry-create/request-entry-create.component';
import { RequestEntryTimelineComponent } from './request-entry-timeline/request-entry-timeline.component';
import { RequestEntryTransferComponent } from './request-entry-transfer/request-entry-transfer.component';
import { RequestEntryCommentComponent } from './request-entry-comment/request-entry-comment.component';
import { RequestEntryReplyComponent } from './request-entry-reply/request-entry-reply.component';



@NgModule({
  declarations: [
  
		RequestDashboardComponent,
		RequestComponent,
		RequestEntriesComponent,
		RequestEntryDetailComponent,
		RequestEntryCreateComponent,
		RequestEntryTimelineComponent,
		RequestEntryTransferComponent,
		RequestEntryCommentComponent,
		RequestEntryReplyComponent

	],
  
  imports: [
  
    CommonModule,
    GeneralRequestModule,
    GeneralModule,
    SimplesModule,
    RequestRoutingModule,
  ],

  providers : [

  ],

  exports : [
  ]

})

export class RequestModule { 

}
