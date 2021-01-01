import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router'; 

import { EntryDeleteAllGuard } from '../../shared/guards/entry-delete-all.guard';

import { InternalThesisComponent } from './internal-thesis/internal-thesis.component';

import { InternalThesisDashboardComponent } from './internal-thesis-dashboard/internal-thesis-dashboard.component';

import { InternalThesisEntriesComponent } from './internal-thesis-entries/internal-thesis-entries.component';

import { InternalThesisEntryDeleteAllComponent } from './internal-thesis-entry-delete-all/internal-thesis-entry-delete-all.component';

import { InternalThesisEntryCreateComponent } from './internal-thesis-entry-create/internal-thesis-entry-create.component';

import { InternalThesisEntryDetailComponent } from './internal-thesis-entry-detail/internal-thesis-entry-detail.component';

import { InternalThesisEntryUpdateComponent } from './internal-thesis-entry-update/internal-thesis-entry-update.component';

import { InternalThesisEntryDeleteComponent } from './internal-thesis-entry-delete/internal-thesis-entry-delete.component';

import { TData } from './internal-thesis-route-data';

const route : Routes = [

	{'path' : '' , 'component' : InternalThesisComponent , 

		'children' : [

				{'path' : '' , 'component' : InternalThesisDashboardComponent , 'data' : {'dashboard' : TData.dashboard } } ,

				{'path' : 'entries' , 'component' : InternalThesisEntriesComponent , 'data' : {'entries' : TData.entries } } ,

				{'path' : 'entries/delete/all' , 'component' : InternalThesisEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : TData.deleteAll } } ,

				{'path' : 'create' , 'component' : InternalThesisEntryCreateComponent , 'data' : {'create' : TData.create }} ,

				{'path' : 'entry/detail/:entry' , 'component' : InternalThesisEntryDetailComponent , 'data' : {'detail' : TData.detail }} ,

				{'path' : 'entry/update/:entry' , 'component' : InternalThesisEntryUpdateComponent , 'data' : {'update' : TData.update }} ,

				{'path' : 'entry/delete/:entry' , 'component' : InternalThesisEntryDeleteComponent , 'data' : {'delete' : TData.delete } }	

	]	} ,

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class InternalThesisRoutingModule {

	constructor() {

		
	}


}