import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router'; 

import { ResolverService } from '../../../resolver.service';

import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';

import { InternalEntryComponent } from '../internal-all/internal-entry/internal-entry.component';

import { InternalEntryDashboardComponent } from '../internal-all/internal-entry-dashboard/internal-entry-dashboard.component';

import { InternalEntryDeleteAllComponent } from '../internal-all/internal-entry-delete-all/internal-entry-delete-all.component';

import { RequestLimitEntriesComponent } from './request-limit-entries/request-limit-entries.component';

import { RequestLimitEntryDetailComponent } from './request-limit-entry-detail/request-limit-entry-detail.component';

import { RequestLimitEntryUpdateComponent } from './request-limit-entry-update/request-limit-entry-update.component';


import { RLData } from './request-limit-route-data';

const route : Routes = [

	{'path' : '' , 'component' : InternalEntryComponent ,

	'children' : [ 

	{'path' : '' , 'component' : InternalEntryDashboardComponent , 'data' : {'dashboard' : RLData.dashboard } } ,

	{'path' : 'entries' , 'component' : RequestLimitEntriesComponent , 'data' : {'entries' : RLData.entries , 'link2' : false } } ,

	{'path' : 'entries/delete/all' , 'component' : InternalEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RLData.deleteAll } } ,

	{'path' : 'entry/update/:entry' , 'component' : RequestLimitEntryUpdateComponent , 'data' : {'update' : RLData.update }} ,

	{'path' : 'entry/detail/:entry' , 'component' : RequestLimitEntryDetailComponent , 'data' : {'detail' : RLData.detail } }	

		] }

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class RequestLimitRoutingModule {

	constructor() {

		
	}


}