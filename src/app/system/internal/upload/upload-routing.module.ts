import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router'; 

import { ResolverService } from '../../../resolver.service';

import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';

import { InternalEntryComponent } from '../internal-all/internal-entry/internal-entry.component';

import { InternalEntryDashboardComponent } from '../internal-all/internal-entry-dashboard/internal-entry-dashboard.component';

import { InternalEntryDeleteAllComponent } from '../internal-all/internal-entry-delete-all/internal-entry-delete-all.component';

import { UploadEntriesComponent } from './upload-entries/upload-entries.component';


import { UData } from './upload-route-data';

const route : Routes = [

	{'path' : '' , 'component' : InternalEntryComponent ,

	'children' : [ 

	{'path' : '' , 'component' : InternalEntryDashboardComponent , 'data' : {'dashboard' : UData.dashboard } } ,

	{'path' : 'entries' , 'component' : UploadEntriesComponent , 'data' : {'entries' : UData.entries , 'link2' : false } } ,

	{'path' : 'entries/delete/all' , 'component' : InternalEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : UData.deleteAll } } ,

		] }

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class UploadRoutingModule {

	constructor() {

		
	}


}