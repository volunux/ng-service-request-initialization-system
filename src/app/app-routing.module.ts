import { NgModule } from '@angular/core';

import { Routes , RouterModule , PreloadAllModules } from '@angular/router';

import { WelcomeComponent } from './all/welcome/welcome.component';

import { UnauthorizedComponent } from './all/unauthorized/unauthorized.component';

import { PageNotFoundComponent } from './all/page-not-found/page-not-found.component';

import { UnauthorizedGuard } from './general/unauthorized-guard.guard';

import { SelectivePreloadingStrategyService } from './all/selective-preloading-strategy.service';

const routes: Routes = [

	{'path' : '' , 'component' : WelcomeComponent } ,

	{'path' : '' , 'loadChildren' : () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) } ,

	{'path' : 'system' , 'loadChildren' : () => import('./system/system.module').then(m => m.SystemModule) } ,

	{'path' : 'account/profile' , 'loadChildren' : () => import('./account/profile/profile.module').then(m => m.ProfileModule) } ,

	{'path' : 'request' , 'loadChildren' : () => import('./account/request/request.module').then(m => m.RequestModule) } ,

	{'path' : 'payment' , 'loadChildren' : () => import('./account/payment/payment.module').then(m => m.PaymentModule) } ,

	{'path' : 'unauthorized' , 'component' : UnauthorizedComponent , 'canActivate' : [UnauthorizedGuard] } ,

	{'path' : '**' , 'component' : PageNotFoundComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(routes , {'preloadingStrategy' : SelectivePreloadingStrategyService , 'scrollPositionRestoration' : 'top' })],

  providers : [SelectivePreloadingStrategyService] ,
  
  exports: [RouterModule]

})

export class AppRoutingModule { 

}
