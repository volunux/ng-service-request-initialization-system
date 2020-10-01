import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../authentication/authentication.guard';
import { SystemRoleGuard } from '../system-role-guard.guard';
import { UserStatusGuard } from '../../authentication/user-status.guard';
import { DeleteAllGuard } from './department-delete-all/delete-all.guard';

import { SystemComponent } from '../system/system.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';
import { DepartmentDeleteAllComponent } from './department-delete-all/department-delete-all.component';

const routes: Routes = [

	{'path' : '' ,

		'canActivate' : [AuthenticationGuard , UserStatusGuard , SystemRoleGuard] ,

		'children' : [ 

	{'path' : '' , 'component' : DepartmentDashboardComponent  } ,

	{'path' : 'entries' , 'component' : DepartmentListComponent } ,

	{'path' : 'entries/delete/all' , 'component' : DepartmentDeleteAllComponent ,

	'data' : {'title' : 'Department Entry Delete All' , 'animation' : 'department-delete-all'} } ,

	{'path' : 'entry/add' , 'component' : DepartmentCreateComponent ,

	'data' : {'title' : 'Add a Department' , 'animation' : 'department-add'} } ,

	{'path' : 'entry/detail/:department' , 'component' : DepartmentDetailComponent ,

	'data' : {'title' : 'Department Entry Detail' , 'animation' : 'department-entry-detail'} } ,
	
	{'path' : 'entry/update/:department' , 'component' : DepartmentUpdateComponent ,

	'data' : {'title' : 'Department Entry Update' , 'animation' : 'department-entry-update'} } ,

	{'path' : 'entry/delete/:department' , 'component' : DepartmentDeleteComponent ,

	'data' : {'title' : 'Department Entry Delete' , 'animation' : 'department-entry-delete'} }

	]	}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class DepartmentRoutingModule { }
