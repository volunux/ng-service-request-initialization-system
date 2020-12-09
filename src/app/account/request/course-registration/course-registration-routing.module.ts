import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { RequestComponent } from '../request/request.component';

import { RequestDashboardComponent } from '../request-dashboard/request-dashboard.component';

import { RequestEntryCreateComponent } from '../request-entry-create/request-entry-create.component';

import { RequestEntryCommentComponent } from '../request-entry-comment/request-entry-comment.component';

import { RequestEntryDetailComponent } from '../request-entry-detail/request-entry-detail.component';

import { RequestEntryTimelineComponent } from '../request-entry-timeline/request-entry-timeline.component';

import { RequestEntryTransferComponent } from '../request-entry-transfer/request-entry-transfer.component';

import { RequestEntriesComponent } from '../request-entries/request-entries.component';

import { RequestEntryReplyComponent } from '../request-entry-reply/request-entry-reply.component';

import { CRData } from './course-registration-route-data';


const routes : Routes = [

	{'path' : '' ,

		'component' : RequestComponent , 

		'children' : [

	{'path' : '' , 'component' : RequestDashboardComponent , 

									'data' : {'dashboard' : CRData.dashboard} } ,

	{'path' : 'create' , 'component' : RequestEntryCreateComponent , 

									'data' : {'create' : CRData.create } } ,

	{'path' : 'entry/:entry/comment/add' , 'component' : RequestEntryCommentComponent ,

									'data' : {'comment' : CRData.comment } } ,

	{'path' : 'entry/detail/:entry' , 'component' : RequestEntryDetailComponent ,

									'data' : {'detail' : CRData.detail } } ,

	{'path' : 'entry/:entry/timeline' , 'component' : RequestEntryTimelineComponent ,

									'data' : {'timeline' : CRData.timeline } } ,

	{'path' : 'entry/:entry/transfer' , 'component' : RequestEntryTransferComponent ,

									'data' : {'transfer' : CRData.transfer } } ,

	{'path' : 'entries' , 'component' : RequestEntriesComponent ,

									'data' : {'entries' : CRData.entries } } ,

	{'path' : 'entry/:entry/comment/:comment/reply/add' , 'component' : RequestEntryReplyComponent ,

									'data' : {'reply' : CRData.reply } }	

	]	}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class CourseRegistrationRoutingModule { 

}
