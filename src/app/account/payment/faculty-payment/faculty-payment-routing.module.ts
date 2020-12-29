import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../../shared/guards/authentication.guard';

import { IsStudentGuard } from '../../../shared/guards/is-student.guard';

import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';

import { PaymentAllComponent } from '../payment-all/payment-all/payment-all.component';

import { PaymentAllDashboardComponent } from '../payment-all/payment-all-dashboard/payment-all-dashboard.component';

import { PaymentAllEntriesComponent } from '../payment-all/payment-all-entries/payment-all-entries.component';

import { PaymentAllEntryDetailComponent } from '../payment-all/payment-all-entry-detail/payment-all-entry-detail.component';

import { PaymentAllEntryCreateComponent } from '../payment-all/payment-all-entry-create/payment-all-entry-create.component';

import { PaymentAllValidationComponent } from '../payment-all/payment-all-validation/payment-all-validation.component';

import { PaymentAllDeleteAllComponent } from '../payment-all/payment-all-delete-all/payment-all-delete-all.component';

import { FPData } from './faculty-payment-route-data';

const routes: Routes = [

	{'path' : '' ,

		'component' : PaymentAllComponent , 

		'canActivate' : [AuthenticationGuard] ,

		'canLoad' : [AuthenticationGuard] ,

		'canActivateChild' : [AuthenticationGuard] ,

		'children' : [

				{'path' : '' , 'component' : PaymentAllDashboardComponent , 'data' : {'dashboard' : FPData.dashboard } } ,

				{'path' : 'create' , 'component' : PaymentAllEntryCreateComponent , 'data' : {'create' : FPData.create } , 'canActivate' : [IsStudentGuard] } ,

				{'path' : 'entry/detail/:entry' , 'component' : PaymentAllEntryDetailComponent , 'data' : {'detail' : FPData.detail } } ,

				{'path' : 'validation' , 'component' : PaymentAllValidationComponent , 'data' : {'validation' : FPData.validation } } ,

				{'path' : 'entries' , 'component' : PaymentAllEntriesComponent , 'data' : {'entries' : FPData.entries } } ,

				{'path' : 'entries/delete/all' , 'component' : PaymentAllDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] ,'data' : {'deleteAll' : FPData.deleteAll } } ,

	]	}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class FacultyPaymentRoutingModule { 

}
