import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router'; 

import { ResolverService } from '../../../resolver.service';

import { UserListResolverService } from './user-list-resolver.service';

import { UserDeleteResolverService } from './user-delete/user-delete-resolver.service';

import { UserDeleteAllGuardService } from './user-delete-all/user-delete-all-guard.service';

import { CanDeactivateGuard } from './user-update/can-deactivate.guard';

import { UserComponent } from './user/user.component';

import { UserCreateComponent } from './user-create/user-create.component';

import { UserHomeComponent } from './user-home/user-home.component';

import { UserListComponent } from './user-list/user-list.component';

import { AccountRequestComponent } from './account-request/account-request.component';

import { AccountRequestDetailComponent } from './account-request-detail/account-request-detail.component';

import { AccountRequestUpdateComponent } from './account-request-update/account-request-update.component';

import { AccountReactivateComponent } from './account-reactivate/account-reactivate.component';

import { AccountDeactivateComponent } from './account-deactivate/account-deactivate.component';

import { UserDeleteAllComponent } from './user-delete-all/user-delete-all.component';

import { UserDetailComponent } from './user-detail/user-detail.component';

import { UserUpdateComponent } from './user-update/user-update.component';

import { UserDeleteComponent } from './user-delete/user-delete.component';

import { FirstComponent } from './first/first.component';

import { UData } from './user-route-data';

const route : Routes = [

	{'path' : '' , 'component' : UserHomeComponent ,

	'children' : [ 

	{'path' : '' , 'component' : UserComponent , 'data' : {'title' : 'User' , 'animation' : 'user'} } ,

	{'path' : 'entries' , 'component' : UserListComponent , 'data' : {'entries' : UData.entries } } ,

	{'path' : 'account-request' , 'component' : AccountRequestComponent , 'data' : {'title' : 'Account Request Entries' , 'animation' : 'account-request' , 'resolver' : false} } ,

	{'path' : 'entries/delete/all' , 'component' : UserDeleteAllComponent , 'canActivate' : [UserDeleteAllGuardService] ,

	'data' : {'title' : 'User Entries : Delete All' , 'animation' : 'user-delete-all'} } ,

	{'path' : 'entry/create' , 'component' : UserCreateComponent , 'data' : {'create' : UData.create } } ,

	{'path' : 'entry/detail/:entry' , 'component' : UserDetailComponent , 'data' : {'detail' : UData.detail } } ,
	
	{'path' : 'entry/update/:entry' , 'component' : UserUpdateComponent , 'canDeactivate' : [CanDeactivateGuard] , 

	'data' : {'title' : 'User Entry Update' , 'animation' : 'user-entry-update'} } ,

	{'path' : 'account-request/entry/detail/:entry' , 'component' : AccountRequestDetailComponent , 'data' : {'title' : 'Account Request Entry Detail' , 'animation' : 'user-entry-detail'} } ,
	
	{'path' : 'account-request/entry/update/:entry' , 'component' : AccountRequestUpdateComponent , 'canDeactivate' : [CanDeactivateGuard] , 

	'data' : {'title' : 'Account Request Entry Update' , 'animation' : 'user-entry-update'} } ,

	{'path' : 'entry/detail/:entry/reactivate' , 'component' : AccountReactivateComponent , 'data' : {'title' : 'User Account Reactivate' , 'animation' : 'account-reactivate'} },

	{'path' : 'entry/detail/:entry/deactivate' , 'component' : AccountDeactivateComponent , 'data' : {'title' : 'User Account Deactivate' , 'animation' : 'account-deactivate'} },

	{'path' : 'entry/delete/:entry' , 'component' : UserDeleteComponent , 

	'data' : {'title' : 'User Entry Delete' , 'animation' : 'user-entry-delete'} }	

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