import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { IsAdminGuard } from '../../shared/guards/is-admin.guard';
import { AccountStatusGuard } from '../../shared/guards/account-status.guard';

import { StatisticsEntriesComponent } from './statistics-entries/statistics-entries.component';
import { StatisticsDashboardComponent } from './statistics-dashboard/statistics-dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { SData } from './statistics-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : StatisticsComponent ,

	'canActivate' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

	'canLoad' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

				'children' : [

					{'path' : '' , 'component' : StatisticsDashboardComponent } ,

					{'path' : 'entries/comment-reply' , 'component' : StatisticsEntriesComponent , 

						'data' : {'entries' : {...SData.entries , 'title' : 'General Request , Refund Comment & Reply'} , 'entryType' : 'comment-reply' } } ,

					{'path' : 'entries/internal' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : {...SData.entries , 'title' : 'Internal'} , 'entryType' : 'internal' } } ,

					{'path' : 'entries/payment' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : {...SData.entries , 'title' : 'Payment' } , 'entryType' : 'payment' }  } ,

					{'path' : 'entries/comment' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : {...SData.entries , 'title' : 'Comment' } , 'entryType' : 'comment' }  } ,

					{'path' : 'entries/reply' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : {...SData.entries , 'title' : 'Reply' } , 'entryType' : 'reply' }  } ,

					{'path' : 'entries/request' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : {...SData.entries , 'title' : 'General Request' } , 'entryType' : 'request' }  } ,

					{'path' : 'entries/user' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : {...SData.entries , 'title' : 'User' } , 'entryType' : 'user' }  } ,

				]}
	] 

}];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class StatisticsRoutingModule { 

}
