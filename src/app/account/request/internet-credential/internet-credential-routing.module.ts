import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../../shared/guards/authentication.guard';

import { IsStudentGuard } from '../../../shared/guards/is-student.guard';

import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';

import { RequestAllEntryComponent } from '../request-all/request-all-entry/request-all-entry.component';

import { RequestAllDashboardComponent } from '../request-all/request-all-dashboard/request-all-dashboard.component';

import { RequestEntryCreateComponent } from '../request-all/request-entry-create/request-entry-create.component';

import { RequestEntryCommentComponent } from '../request-all/request-entry-comment/request-entry-comment.component';

import { RequestEntryDetailComponent } from '../request-all/request-entry-detail/request-entry-detail.component';

import { RequestEntryTimelineComponent } from '../request-all/request-entry-timeline/request-entry-timeline.component';

import { RequestEntryTransferComponent } from '../request-all/request-entry-transfer/request-entry-transfer.component';

import { RequestEntriesComponent } from '../request-all/request-entries/request-entries.component';

import { RequestEntryReplyComponent } from '../request-all/request-entry-reply/request-entry-reply.component';

import { RequestAllDeleteAllComponent } from '../request-all/request-all-delete-all/request-all-delete-all.component';

import { ICData } from './internet-credential-route-data';

const routes : Routes = [

	{'path' : '' ,

		'component' : RequestAllEntryComponent , 

		'canActivate' : [AuthenticationGuard] ,

		'canLoad' : [AuthenticationGuard] ,

		'canActivateChild' : [AuthenticationGuard] ,

		'children' : [

				{'path' : '' , 'component' : RequestAllDashboardComponent , 'data' : {'dashboard' : ICData.dashboard} } ,

				{'path' : 'create' , 'component' : RequestEntryCreateComponent , 'data' : {'create' : ICData.create } , 'canActivate' : [IsStudentGuard] } ,

				{'path' : 'entry/:entry/comment/add' , 'component' : RequestEntryCommentComponent , 'data' : {'comment' : ICData.comment } } ,

				{'path' : 'entry/detail/:entry' , 'component' : RequestEntryDetailComponent , 'data' : {'detail' : ICData.detail } } ,

				{'path' : 'entry/:entry/timeline' , 'component' : RequestEntryTimelineComponent , 'data' : {'timeline' : ICData.timeline } } ,

				{'path' : 'entry/:entry/transfer' , 'component' : RequestEntryTransferComponent , 'data' : {'transfer' : ICData.transfer } } ,

				{'path' : 'entries' , 'component' : RequestEntriesComponent , 'data' : {'entries' : ICData.entries } } ,

				{'path' : 'entry/:entry/comment/:comment/reply/add' , 'component' : RequestEntryReplyComponent , 'data' : {'reply' : ICData.reply } }	,

				{'path' : 'entries/delete/all' , 'component' : RequestAllDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : ICData.deleteAll } } ,

	]	}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class InternetCredentialRoutingModule { 

}
