import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../authentication/authentication.guard';

import { SystemRoleGuard } from './system-role-guard.guard';

import { UserStatusGuard } from '../authentication/user-status.guard';

import { SystemComponent } from './system/system.component';

import { SystemDashboardComponent } from './system-dashboard/system-dashboard.component';

const routes: Routes = [
	
	{'path' : '' ,

		'component' : SystemComponent ,

		'canActivate' : [AuthenticationGuard , UserStatusGuard , SystemRoleGuard] ,

		'children' : [

			{
				'path' : '' ,

				'children' : [

					{'path' : '' , 'component' : SystemDashboardComponent } ,

					{'path' : 'department' , 'loadChildren' : () => import('./department/department.module').then(m => m.DepartmentModule) } 

				]

			}

		] }

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class SystemRoutingModule { 

}
