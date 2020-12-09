import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [

	{'path' : 'department' , 'loadChildren' : () => import('./department/department.module').then((m) => m.DepartmentModule) } ,

	{'path' : 'faculty' , 'loadChildren' : () => import('./faculty/faculty.module').then((m) => m.FacultyModule) } ,

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class PaymentRoutingModule { 

}
