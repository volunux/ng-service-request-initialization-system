import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router'; 

import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';

import { UserComponent } from './user/user.component';

import { UserCreateComponent } from './user-create/user-create.component';

import { UserHomeComponent } from './user-home/user-home.component';

import { UserListComponent } from './user-list/user-list.component';

import { AccountReactivateComponent } from './account-reactivate/account-reactivate.component';

import { UserDeleteAllComponent } from './user-delete-all/user-delete-all.component';

import { UserDetailComponent } from './user-detail/user-detail.component';

import { UserUpdateComponent } from './user-update/user-update.component';

import { UserDeleteComponent } from './user-delete/user-delete.component';

import { UData } from './user-route-data';

const route : Routes = [

	{'path' : '' , 'component' : UserHomeComponent ,

	'children' : [

	{'path' : '' , 'component' : UserComponent , 'data' : {'title' : 'User' , 'animation' : 'user'} } ,

	{'path' : 'entries' , 'component' : UserListComponent , 'data' : {'entries' : UData.entries , 'link2' : false } } ,

	{'path' : 'account-request/entries' , 'component' : UserListComponent , 'data' : {'entries' : UData.entriesRequest , 'link2' : true} } ,

	{'path' : 'entries/delete/all' , 'component' : UserDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : UData.deleteAll } } ,

	{'path' : 'entry/create' , 'component' : UserCreateComponent , 'data' : {'create' : UData.create } } ,

	{'path' : 'entry/detail/:entry' , 'component' : UserDetailComponent , 'data' : {'detail' : UData.detail , 'link2' : false } } ,
	
	{'path' : 'entry/update/:entry' , 'component' : UserUpdateComponent , 'data' : {'update' : UData.update , 'link2' : false } } ,

	{'path' : 'account-request/entry/detail/:entry' , 'component' : UserDetailComponent , 'data' : {'detail' : UData.detail , 'link2' : true } } ,
	
	{'path' : 'account-request/entry/update/:entry' , 'component' : UserUpdateComponent , 'data' : {'update' : UData.update , 'link2' : true} } ,

	{'path' : 'entry/detail/:entry/reactivate' , 'component' : AccountReactivateComponent , 'data' : {'changes' : UData.reactivate , 'link2' : false } },

	{'path' : 'entry/detail/:entry/deactivate' , 'component' : AccountReactivateComponent , 'data' : {'changes' : UData.deactivate , 'link2' : true } },

	{'path' : 'entry/delete/:entry' , 'component' : UserDeleteComponent , 'data' : {'delete' : UData.delete } }	

		] }

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class UserRoutingModule {

	constructor() {

		
	}


}