import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';

import { IsAdminGuard } from '../../shared/guards/is-admin.guard';

import { AccountStatusGuard } from '../../shared/guards/account-status.guard';

import { InternalRequestComponent } from './internal-request/internal-request.component';

import { InternalRequestDashboardComponent } from './internal-request-dashboard/internal-request-dashboard.component';

const routes : Routes = [

	{'path' : '' , 

	'component' : InternalRequestComponent ,

	'canActivate' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

	'canLoad' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

				'children' : [

					{'path' : '' , 'component' : InternalRequestDashboardComponent } ,

					{'path' : 'course-registration' , 'loadChildren' : () => import('../../account/request/course-registration/course-registration.module').then((m) => m.CourseRegistrationModule) } ,

					{'path' : 'school-result' , 'loadChildren' : () => import('../../account/request/school-result/school-result.module').then((m) => m.SchoolResultModule) } ,

					{'path' : 'email-password' , 'loadChildren' : () => import('../../account/request/email-password/email-password.module').then((m) => m.EmailPasswordModule) } ,

					{'path' : 'internet-credential' , 'loadChildren' : () => import('../../account/request/internet-credential/internet-credential.module').then((m) => m.InternetCredentialModule) } ,

					{'path' : 'internet-password' , 'loadChildren' : () => import('../../account/request/internet-password/internet-password.module').then((m) => m.InternetPasswordModule) } ,

					{'path' : 'refund' , 'loadChildren' : () => import('../../account/request/refund/refund.module').then((m) => m.RefundModule) }

				]}

	]}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})
export class InternalRequestRoutingModule { }
