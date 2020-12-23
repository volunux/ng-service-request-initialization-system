import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneralConversationModule } from '../../../shared/general-conversation/general-conversation.module';
import { GeneralAllModule } from '../../../shared/general-all/general-all.module';

import { ConversationEntriesComponent } from './conversation-entries/conversation-entries.component';
import { ConversationEntryDetailComponent } from './conversation-entry-detail/conversation-entry-detail.component';
import { ConversationEntryUpdateComponent } from './conversation-entry-update/conversation-entry-update.component';
import { ConversationEntryDeleteComponent } from './conversation-entry-delete/conversation-entry-delete.component';
import { ConversationEntryDeleteAllComponent } from './conversation-entry-delete-all/conversation-entry-delete-all.component';
import { ConversationDashboardComponent } from './conversation-dashboard/conversation-dashboard.component';
import { ConversationComponent } from './conversation/conversation.component';



@NgModule({

  declarations: [

  ConversationEntriesComponent,
  ConversationEntryDetailComponent,
  ConversationEntryUpdateComponent,
  ConversationEntryDeleteComponent,
  ConversationEntryDeleteAllComponent,
  ConversationDashboardComponent,
  ConversationComponent,
],
  
  imports: [
    CommonModule,
    GeneralConversationModule,
    GeneralAllModule,
    RouterModule.forChild([])
  ],

  providers : [

	]

})

export class ConversationModule { 

}
