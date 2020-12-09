import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { DepartmentComponent } from './department/department.component';

import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';

import { DepartmentPaymentEntriesComponent } from './department-payment-entries/department-payment-entries.component';

import { DepartmentPaymentEntryDetailComponent } from './department-payment-entry-detail/department-payment-entry-detail.component';

import { DepartmentPaymentEntryCreateComponent } from './department-payment-entry-create/department-payment-entry-create.component';

import { PaymentValidationComponent } from './payment-validation/payment-validation.component';

const routes: Routes = [

	{'path' : '' ,

		'component' : DepartmentComponent , 

		'children' : [

	{'path' : '' , 'component' : DepartmentDashboardComponent } ,

	{'path' : 'create' , 'component' : DepartmentPaymentEntryCreateComponent } ,

	{'path' : 'entry/detail/:entry' , 'component' : DepartmentPaymentEntryDetailComponent } ,

	{'path' : 'validation' , 'component' : PaymentValidationComponent } ,

	{'path' : 'entries' , 'component' : DepartmentPaymentEntriesComponent } ,


	]	}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class DepartmentRoutingModule { 

}
