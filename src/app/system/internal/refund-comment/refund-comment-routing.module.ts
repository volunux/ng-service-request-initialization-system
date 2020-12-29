import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router'; 

import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';

import { ConversationEntriesComponent } from '../conversation/conversation-entries/conversation-entries.component';

import { ConversationEntryDetailComponent } from '../conversation/conversation-entry-detail/conversation-entry-detail.component';

import { ConversationComponent } from '../conversation/conversation/conversation.component';

import { ConversationDashboardComponent } from '../conversation/conversation-dashboard/conversation-dashboard.component';

import { ConversationEntryUpdateComponent } from '../conversation/conversation-entry-update/conversation-entry-update.component';

import { ConversationEntryDeleteComponent } from '../conversation/conversation-entry-delete/conversation-entry-delete.component'

import { ConversationEntryDeleteAllComponent } from '../conversation/conversation-entry-delete-all/conversation-entry-delete-all.component'

import { RCData } from './refund-comment-route-data';

const route : Routes = [

	{'path' : '' , 'component' : ConversationComponent ,

	'children' : [ 

	{'path' : '' , 'component' : ConversationDashboardComponent , 'data' : {'dashboard' : RCData.dashboard } } ,

	{'path' : 'entries' , 'component' : ConversationEntriesComponent , 'data' : {'entries' : RCData.entries , 'link2' : false } } ,

	{'path' : 'entry/detail/:entry' , 'component' : ConversationEntryDetailComponent , 'data' : {'detail' : RCData.detail , 'link2' : false } } ,

	{'path' : 'entry/update/:entry' , 'component' : ConversationEntryUpdateComponent , 'data' : {'update' : RCData.update , 'link2' : false } } ,

	{'path' : 'entry/delete/:entry' , 'component' : ConversationEntryDeleteComponent , 'data' : {'delete' : RCData.delete , 'link2' : false } } ,

	{'path' : 'entries/delete/all' , 'component' : ConversationEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RCData.deleteAll } } ,

		] }

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class RefundCommentRoutingModule {

	constructor() {

		
	}


}