import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../authentication/authentication.guard';

import { PaymentComponent } from './payment/payment.component';

import { PaymentDashboardComponent } from './payment-dashboard/payment-dashboard.component';

const routes : Routes = [

	{'path' : '' , 

	'component' : PaymentComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

			'canLoad' : [AuthenticationGuard] ,

				'children' : [

					{'path' : '' , 'component' : PaymentDashboardComponent } ,

					{'path' : 'department' , 'loadChildren' : () => import('./department-payment/department-payment.module').then((m) => m.DepartmentPaymentModule) } ,

					{'path' : 'faculty' , 'loadChildren' : () => import('./faculty-payment/faculty-payment.module').then((m) => m.FacultyPaymentModule) } ,

				]}
		]}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class PaymentRoutingModule { 

}
