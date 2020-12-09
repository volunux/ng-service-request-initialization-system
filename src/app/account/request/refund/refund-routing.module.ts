import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { RefundDetailComponent } from './refund-detail/refund-detail.component';

import { RefundEntriesComponent } from './refund-entries/refund-entries.component';

import { RefundLetterComponent } from './refund-letter/refund-letter.component';


import { RequestComponent } from '../request/request.component';

import { RequestDashboardComponent } from '../request-dashboard/request-dashboard.component';

import { RequestEntryCreateComponent } from '../request-entry-create/request-entry-create.component';

import { RequestEntryCommentComponent } from '../request-entry-comment/request-entry-comment.component';

import { RequestEntryTimelineComponent } from '../request-entry-timeline/request-entry-timeline.component';

import { RequestEntryReplyComponent } from '../request-entry-reply/request-entry-reply.component';

import { RFData } from './refund-route-data';

const routes : Routes = [

	{'path' : '' ,

		'component' : RequestComponent , 

		'children' : [

	{'path' : '' , 'component' : RequestDashboardComponent , 

						'data' : {'dashboard' : RFData.dashboard } } ,

	{'path' : 'create' , 'component' : RequestEntryCreateComponent ,

						'data' : {'create' : RFData.create } } ,

	{'path' : 'entry/:entry/comment/add' , 'component' : RequestEntryCommentComponent ,

						'data' : {'comment' : RFData.comment } } ,

	{'path' : 'entry/detail/:entry' , 'component' : RefundDetailComponent } ,

	{'path' : 'entry/:entry/timeline' , 'component' : RequestEntryTimelineComponent } ,

	{'path' : 'entry/:entry/letter' , 'component' : RefundLetterComponent } ,

	{'path' : 'entries' , 'component' : RefundEntriesComponent } ,

	{'path' : 'entry/:entry/comment/:comment/reply/add' , 'component' : RequestEntryReplyComponent ,

						'data' : {'reply' : RFData.reply }}	

	]	}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class RefundRoutingModule { 

}
