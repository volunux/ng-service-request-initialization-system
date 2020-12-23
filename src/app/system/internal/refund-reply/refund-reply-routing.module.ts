import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router'; 

import { ResolverService } from '../../../resolver.service';

import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';

import { ConversationEntriesComponent } from '../conversation/conversation-entries/conversation-entries.component';

import { ConversationEntryDetailComponent } from '../conversation/conversation-entry-detail/conversation-entry-detail.component';

import { ConversationComponent } from '../conversation/conversation/conversation.component';

import { ConversationDashboardComponent } from '../conversation/conversation-dashboard/conversation-dashboard.component';

import { ConversationEntryUpdateComponent } from '../conversation/conversation-entry-update/conversation-entry-update.component';

import { ConversationEntryDeleteComponent } from '../conversation/conversation-entry-delete/conversation-entry-delete.component'

import { ConversationEntryDeleteAllComponent } from '../conversation/conversation-entry-delete-all/conversation-entry-delete-all.component'

import { RRData } from './refund-reply-route-data';

const route : Routes = [

	{'path' : '' , 'component' : ConversationComponent ,

	'children' : [ 

	{'path' : '' , 'component' : ConversationDashboardComponent , 'data' : {'dashboard' : RRData.dashboard } } ,

	{'path' : 'entries' , 'component' : ConversationEntriesComponent , 'data' : {'entries' : RRData.entries , 'link2' : false } } ,

	{'path' : 'entry/detail/:entry' , 'component' : ConversationEntryDetailComponent , 'data' : {'detail' : RRData.detail , 'link2' : false } } ,

	{'path' : 'entry/update/:entry' , 'component' : ConversationEntryUpdateComponent , 'data' : {'update' : RRData.update , 'link2' : false } } ,

	{'path' : 'entry/delete/:entry' , 'component' : ConversationEntryDeleteComponent , 'data' : {'delete' : RRData.delete , 'link2' : false } } ,

	{'path' : 'entries/delete/all' , 'component' : ConversationEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RRData.deleteAll } } ,

		] }

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class RefundReplyRoutingModule {

	constructor() {

		
	}


}