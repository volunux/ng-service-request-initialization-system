import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../authentication/authentication.guard';

import { FileControlComponent } from './file-control/file-control.component';

import { ProfileComponent } from './profile/profile.component';

import { ProfileUpdateComponent } from './profile-update/profile-update.component';

import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

import { ProfileDeactivateComponent } from './profile-deactivate/profile-deactivate.component';

import { ProfileReactivateComponent } from './profile-reactivate/profile-reactivate.component';

import { ChangePasswordComponent } from './change-password/change-password.component';

import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';

const routes: Routes = [

	{'path' : '' ,

		'component' : ProfileComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

				'children' : [

						{'path' : '' , 'component' : ProfileDashboardComponent } ,

						{ 'path' : 'change-display' , 'component' : FileControlComponent } ,

						{ 'path' : 'change-password' , 'component' : ChangePasswordComponent } ,

						{ 'path' : 'update' , 'component' : ProfileUpdateComponent } ,

						{ 'path' : 'detail' , 'component' : ProfileDetailComponent } ,

						{ 'path' : 'deactivate' , 'component' : ProfileDeactivateComponent } ,

						{ 'path' : 'reactivate' , 'component' : ProfileReactivateComponent } ,

				]}
		]}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class ProfileRoutingModule { }
