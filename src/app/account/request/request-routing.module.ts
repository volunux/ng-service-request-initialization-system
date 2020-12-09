import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

const routes: Routes = [

	{'path' : 'course-registration' , 'loadChildren' : () => import('./course-registration/course-registration.module').then((m) => m.CourseRegistrationModule) } ,

	{'path' : 'school-result' , 'loadChildren' : () => import('./school-result/school-result.module').then((m) => m.SchoolResultModule) } ,

	{'path' : 'email-password' , 'loadChildren' : () => import('./email-password/email-password.module').then((m) => m.EmailPasswordModule) } ,

	{'path' : 'internet-credential' , 'loadChildren' : () => import('./internet-credential/internet-credential.module').then((m) => m.InternetCredentialModule) } ,

	{'path' : 'internet-password' , 'loadChildren' : () => import('./internet-password/internet-password.module').then((m) => m.InternetPasswordModule) } ,

	{'path' : 'refund' , 'loadChildren' : () => import('./refund/refund.module').then((m) => m.RefundModule) }

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class RequestRoutingModule { 

}
