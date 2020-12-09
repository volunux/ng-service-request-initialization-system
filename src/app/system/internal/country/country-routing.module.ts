import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router'; 

import { InternalEntryDeleteAllGuard } from '../internal-all/internal-entry-delete-all/internal-entry-delete-all.guard';

import { InternalEntryUpdateGuard } from '../internal-all/internal-entry-update/internal-entry-update.guard';

import { InternalEntryComponent } from '../internal-all/internal-entry/internal-entry.component';

import { InternalEntryDashboardComponent } from '../internal-all/internal-entry-dashboard/internal-entry-dashboard.component';

import { InternalEntriesComponent } from '../internal-all/internal-entries/internal-entries.component';

import { InternalEntryDeleteAllComponent } from '../internal-all/internal-entry-delete-all/internal-entry-delete-all.component';

import { InternalEntryCreateComponent } from '../internal-all/internal-entry-create/internal-entry-create.component';

import { InternalEntryDetailComponent } from '../internal-all/internal-entry-detail/internal-entry-detail.component';

import { InternalEntryUpdateComponent } from '../internal-all/internal-entry-update/internal-entry-update.component';

import { InternalEntryDeleteComponent } from '../internal-all/internal-entry-delete/internal-entry-delete.component';

import { CData } from './country-route-data';

const route : Routes = [

	{'path' : '' , 'component' : InternalEntryComponent , 

		'children' : [

				{'path' : '' , 'component' : InternalEntryDashboardComponent ,

									'data' : {'dashboard' : CData.dashboard } } ,

				{'path' : 'entries' , 'component' : InternalEntriesComponent ,

									'data' : {'entries' : CData.entries } } ,

				{'path' : 'entries/delete/all' , 'component' : InternalEntryDeleteAllComponent , 'canActivate' : [InternalEntryDeleteAllGuard] ,

									'data' : {'deleteAll' : CData.deleteAll } } ,

				{'path' : 'create' , 'component' : InternalEntryCreateComponent  ,

									'data' : {'create' : CData.create }} ,

				{'path' : 'entry/detail/:entry' , 'component' : InternalEntryDetailComponent ,

									'data' : {'detail' : CData.detail }} ,

				{'path' : 'entry/update/:entry' , 'component' : InternalEntryUpdateComponent , 'canDeactivate' : [InternalEntryUpdateGuard] ,

									'data' : {'update' : CData.update }} ,

				{'path' : 'entry/delete/:entry' , 'component' : InternalEntryDeleteComponent ,

									'data' : {'delete' : CData.delete } }	

	]	} ,

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class CountryRoutingModule {

	constructor() {

		
	}


}