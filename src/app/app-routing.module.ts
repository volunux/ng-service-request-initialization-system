import { NgModule } from '@angular/core';

import { Routes , RouterModule , PreloadAllModules } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UnauthorizedGuard } from './general/unauthorized.guard';

const routes: Routes = [

	{'path' : '' , 'component' : WelcomeComponent } ,

	{'path' : '' , 'loadChildren' : () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) } ,

	{'path' : 'system' , 'loadChildren' : () => import('./system/system.module').then(m => m.SystemModule) } ,

/*	{'path' : 'account/profile' , 'loadChildren' : () => import('./account/profile/profile.module').then(m => m.ProfileModule) } ,

	{'path' : 'request' , 'loadChildren' : () => import('./account/request/request.module').then(m => m.RequestModule) } ,

	{'path' : 'payment' , 'loadChildren' : () => import('./account/payment/payment.module').then(m => m.PaymentModule) } ,*/

	{'path' : 'unauthorized' , 'component' : UnauthorizedComponent , 'canActivate' : [UnauthorizedGuard] } ,

	{'path' : '**' , 'component' : PageNotFoundComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(routes , {'preloadingStrategy' : PreloadAllModules , 'scrollPositionRestoration' : 'top' })],
  
  exports: [RouterModule]

})

export class AppRoutingModule { 

}
