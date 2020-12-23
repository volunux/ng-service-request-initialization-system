import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SimplesModule } from '../simples/simples.module';
import { GeneralModule } from '../../general/general.module';
import { GeneralServicesModule } from '../services/general-services.module';

import { GeneralConversationService } from './general-conversation.service';
import { GeneralConversationFormService } from './general-conversation-form.service';


import { GeneralConversationDashboardComponent } from './general-conversation-dashboard/general-conversation-dashboard.component';
import { GeneralConversationEntriesComponent } from './general-conversation-entries/general-conversation-entries.component';
import { GeneralConversationEntryDetailComponent } from './general-conversation-entry-detail/general-conversation-entry-detail.component';
import { GeneralConversationEntryUpdateComponent } from './general-conversation-entry-update/general-conversation-entry-update.component';
import { GeneralConversationEntryDeleteComponent } from './general-conversation-entry-delete/general-conversation-entry-delete.component';
import { GeneralConversationValidatorsComponent } from './general-conversation-validators/general-conversation-validators.component';



@NgModule({
  declarations: [

  GeneralConversationDashboardComponent,
  GeneralConversationEntriesComponent,
  GeneralConversationEntryDetailComponent,
  GeneralConversationEntryUpdateComponent,
  GeneralConversationEntryDeleteComponent,
  GeneralConversationValidatorsComponent

  ],
  
  imports: [
  
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),
    GeneralModule,
    SimplesModule,
    GeneralServicesModule,
  ],

  providers : [

  	GeneralConversationService,
  	GeneralConversationFormService,
  ] ,

  exports : [
  
    GeneralConversationDashboardComponent,
    GeneralConversationEntriesComponent,
    GeneralConversationEntryDetailComponent,
    GeneralConversationEntryUpdateComponent,
    GeneralConversationEntryDeleteComponent,
    GeneralConversationValidatorsComponent
  ]

})

export class GeneralConversationModule { 

}
