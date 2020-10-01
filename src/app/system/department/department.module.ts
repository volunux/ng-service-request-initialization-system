import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';

import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentDeleteAllComponent } from './department-delete-all/department-delete-all.component';
import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';


@NgModule({

  declarations: [

  	DepartmentListComponent,
  	DepartmentCreateComponent,
  	DepartmentUpdateComponent,
  	DepartmentDeleteComponent,
  	DepartmentDetailComponent,
  	DepartmentDeleteAllComponent,
  	DepartmentDashboardComponent,

  ],

  imports: [

    CommonModule,
    DepartmentRoutingModule
  ]

})

export class DepartmentModule { 

}
