import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';

import { IsAdminGuard } from '../../shared/guards/is-admin.guard';

import { AccountStatusGuard } from '../../shared/guards/account-status.guard';

import { InternalPaymentComponent } from './internal-payment/internal-payment.component';

import { InternalPaymentDashboardComponent } from './internal-payment-dashboard/internal-payment-dashboard.component';

const routes : Routes = [

	{'path' : '' , 

	'component' : InternalPaymentComponent ,

	'canActivate' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

	'canLoad' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

				'children' : [

					{'path' : '' , 'component' : InternalPaymentDashboardComponent } ,

					{'path' : 'department' , 'loadChildren' : () => import('../../account/payment/department-payment/department-payment.module').then((m) => m.DepartmentPaymentModule) } ,

					{'path' : 'faculty' , 'loadChildren' : () => import('../../account/payment/faculty-payment/faculty-payment.module').then((m) => m.FacultyPaymentModule) } ,

				]}
	]}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})
export class InternalPaymentRoutingModule { }
