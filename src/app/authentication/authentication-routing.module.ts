import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HaveLoggedInGuard } from '../shared/guards/have-logged-in.guard';

import { AData } from './authentication-route-data';

const routes : Routes = [

	{'path' : 'signin' , 'component' : SignInComponent , 'canActivate' : [HaveLoggedInGuard] , 'data' : {'signIn' : AData.signIn } } ,

	{'path' : 'signup' , 'component' : SignUpComponent , 'canActivate' : [HaveLoggedInGuard] , 'data' : {'signUp' : AData.signUp} } ,	

	{'path' : 'forgot-password' , 'component' : ForgotPasswordComponent ,'data' : {'forgotPassword' : AData.forgotPassword } } ,

	{'path' : 'reset-password/:token' , 'component' : ResetPasswordComponent ,'data' : {'resetPassword' : AData.resetPassword } } ,

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]

})

export class AuthenticationRoutingModule { 

}
