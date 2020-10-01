import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router'; 

import { ResolverService } from '../resolver.service';

import { FacultyListResolverService } from './faculty-list-resolver.service';

import { FacultyDeleteResolverService } from './faculty-delete/faculty-delete-resolver.service';

import { FacultyDeleteAllGuardService } from './faculty-delete-all/faculty-delete-all-guard.service';

import { CanDeactivateGuard } from './faculty-update/can-deactivate.guard';

import { FacultyComponent } from './faculty/faculty.component';

import { FacultyListComponent } from './faculty-list/faculty-list.component';

import { FacultyDeleteAllComponent } from './faculty-delete-all/faculty-delete-all.component';

import { FacultyDetailComponent } from './faculty-detail/faculty-detail.component';

import { FacultyCreateComponent } from './faculty-create/faculty-create.component';

import { FacultyUpdateComponent } from './faculty-update/faculty-update.component';

import { FacultyDeleteComponent } from './faculty-delete/faculty-delete.component';

import { FirstComponent } from './first/first.component';

const route : Routes = [

	{'path' : '' , 'component' : FacultyComponent , 'data' : {'title' : 'Faculty' , 'animation' : 'faculty'} } ,

	{'path' : 'entries' , 'component' : FacultyListComponent , 'data' : {'title' : 'Faculty Entries' , 'animation' : 'faculties' , 'resolver' : false} } ,

	{'path' : 'entries/delete/all' , 'component' : FacultyDeleteAllComponent , 'canActivate' : [FacultyDeleteAllGuardService] ,

	'data' : {'title' : 'Faculty Entry Delete All' , 'animation' : 'faculty-delete-all'} } ,

	{'path' : 'entry/add' , 'component' : FacultyCreateComponent , 'data' : {'title' : 'Add a Faculty' , 'animation' : 'faculty-add'} } ,

	{'path' : 'entry/detail/:faculty' , 'component' : FacultyDetailComponent , 'data' : {'title' : 'Faculty Entry Detail' , 'animation' : 'faculty-entry-detail'} } ,
	
	{'path' : 'entry/update/:faculty' , 'component' : FacultyUpdateComponent , 'canDeactivate' : [CanDeactivateGuard] , 

	'data' : {'title' : 'Faculty Entry Update' , 'animation' : 'faculty-entry-update'} } ,

	{'path' : 'entry/delete/:faculty' , 'component' : FacultyDeleteComponent , 

	'data' : {'title' : 'Faculty Entry Delete' , 'animation' : 'faculty-entry-delete'} }

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class FacultyRoutingModule {

	constructor() {

		
	}


}