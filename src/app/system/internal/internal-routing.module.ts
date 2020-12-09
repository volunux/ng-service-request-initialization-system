import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../authentication/authentication.guard';

import { SystemRoleGuard } from '../system-role-guard.guard';

import { UserStatusGuard } from '../../authentication/user-status.guard';

import { InternalDashboardComponent } from './internal-dashboard/internal-dashboard.component';

import { InternalComponent } from './internal/internal.component';

const routes: Routes = [

	{'path' : '' , 

	'component' : InternalComponent ,

	'canActivate' : [AuthenticationGuard , UserStatusGuard , SystemRoleGuard] ,

	'children' : [

			{'path' : '' ,

				'children' : [

					{'path' : '' , 'component' : InternalDashboardComponent } ,

/*					{'path' : 'faculty' , 'loadChildren' : () => import('./faculty/faculty.module').then(m => m.FacultyModule) } ,

					{'path' : 'department' , 'loadChildren' : () => import('./department/department.module').then(m => m.DepartmentModule) } ,

					{'path' : 'country' , 'loadChildren' : () => import('./country/country.module').then(m => m.CountryModule) } ,

					{'path' : 'unit' , 'loadChildren' : () => import('./unit/unit.module').then(m => m.UnitModule) } ,

					{'path' : 'level' , 'loadChildren' : () => import('./level/level.module').then(m => m.LevelModule) } ,*/

					{'path' : 'user' , 'loadChildren' : () => import('./user/user.module').then(m => m.UserModule) } ,

/*					{'path' : 'request-type' , 'loadChildren' : () => import('./request-type/request-type.module').then(m => m.RequestTypeModule) } ,*/

				]}

	] 


}


];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})
export class InternalRoutingModule { }
