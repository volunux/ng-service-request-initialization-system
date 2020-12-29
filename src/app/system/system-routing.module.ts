import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../shared/guards/authentication.guard';

import { IsAdminGuard } from '../shared/guards/is-admin.guard';

import { AccountStatusGuard } from '../shared/guards/account-status.guard';

import { SystemComponent } from './system/system.component';

import { SystemDashboardComponent } from './system-dashboard/system-dashboard.component';

const routes: Routes = [
	
	{'path' : '' ,

		'component' : SystemComponent ,

		'canActivate' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

		'canLoad' : [IsAdminGuard] ,

		'children' : [

			{
				'path' : '' ,

				'canActivateChild' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

				'children' : [

					{'path' : '' , 'component' : SystemDashboardComponent } ,

					{'path' : 'internal' , 'loadChildren' : () => import('./internal/internal.module').then(m => m.InternalModule) } ,

					{'path' : 'request' , 'loadChildren' : () => import('./internal-request/internal-request.module').then(m => m.InternalRequestModule) } ,

					{'path' : 'payment' , 'loadChildren' : () => import('./internal-payment/internal-payment.module').then(m => m.InternalPaymentModule) } ,

					{'path' : 'statistics' , 'loadChildren' : () => import('./statistics/statistics.module').then(m => m.StatisticsModule) } ,

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
