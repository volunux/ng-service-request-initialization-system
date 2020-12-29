import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';

import { IsAdminGuard } from '../../shared/guards/is-admin.guard';

import { AccountStatusGuard } from '../../shared/guards/account-status.guard';

import { InternalDashboardComponent } from './internal-dashboard/internal-dashboard.component';

import { InternalComponent } from './internal/internal.component';

// Stage ID and Name must be given serious consideration

const routes : Routes = [

	{'path' : '' , 

	'component' : InternalComponent ,

	'canActivate' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

	'canLoad' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

				'children' : [

					{'path' : '' , 'component' : InternalDashboardComponent } ,

					{'path' : 'faculty' , 'loadChildren' : () => import('./faculty/faculty.module').then(m => m.FacultyModule) } ,

					{'path' : 'department' , 'loadChildren' : () => import('./department/department.module').then(m => m.DepartmentModule) } ,

					{'path' : 'country' , 'loadChildren' : () => import('./country/country.module').then(m => m.CountryModule) } ,

					{'path' : 'unit' , 'loadChildren' : () => import('./unit/unit.module').then(m => m.UnitModule) } ,

					{'path' : 'level' , 'loadChildren' : () => import('./level/level.module').then(m => m.LevelModule) } ,

					{'path' : 'user' , 'loadChildren' : () => import('./user/user.module').then(m => m.UserModule) } ,

					{'path' : 'upload' , 'loadChildren' : () => import('./upload/upload.module').then(m => m.UploadModule) } ,

					{'path' : 'comment' , 'loadChildren' : () => import('./comment/comment.module').then(m => m.CommentModule) } ,

					{'path' : 'refund-comment' , 'loadChildren' : () => import('./refund-comment/refund-comment.module').then(m => m.RefundCommentModule) } ,

					{'path' : 'reply' , 'loadChildren' : () => import('./reply/reply.module').then(m => m.ReplyModule) } ,

					{'path' : 'refund-reply' , 'loadChildren' : () => import('./refund-reply/refund-reply.module').then(m => m.RefundReplyModule) } ,

					{'path' : 'refund-stage' , 'loadChildren' : () => import('./refund-stage/refund-stage.module').then(m => m.RefundStageModule) } ,

					{'path' : 'request-type' , 'loadChildren' : () => import('./request-type/request-type.module').then(m => m.RequestTypeModule) } ,

					{'path' : 'request-limit' , 'loadChildren' : () => import('./request-limit/request-limit.module').then(m => m.RequestLimitModule) } ,

					{'path' : 'request-credential' , 'loadChildren' : () => import('./request-credential/request-credential.module').then(m => m.RequestCredentialModule) } ,

				]}
	] 

}];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})
export class InternalRoutingModule { }
