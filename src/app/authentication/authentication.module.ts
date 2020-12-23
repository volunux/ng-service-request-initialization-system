import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { GeneralModule } from '../general/general.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { SignInComponent } from './sign-in/sign-in.component';

import { SignUpComponent } from './sign-up/sign-up.component';

import { ForbiddenNamesDirective } from './forbidden-names.directive';

import { SimplePasswordDirective } from './simple-password.directive';

import { forbiddenNamesValidator , firstLastNames } from './forbidden-names.directive';

import { emailAddressValidator } from './email-address.directive';

import { simplePasswordValidator } from './simple-password.directive';

import { VerifyUsernameValidator , usernameVerification} from './verify-username.service';

import { VerifyEmailAddressValidator , emailAddressVerification } from './verify-email.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetAccountComponent } from './reset-account/reset-account.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({

  declarations: [

    SignInComponent,
    SignUpComponent,
    ForbiddenNamesDirective,
    SimplePasswordDirective,
    ForgotPasswordComponent,
    ResetAccountComponent,
    ResetPasswordComponent

  ],

  imports: [
    CommonModule,
		FormsModule,
    ReactiveFormsModule	,
    GeneralModule ,
    AuthenticationRoutingModule
  ],
  
  exports : [
  	ForbiddenNamesDirective ,
    SimplePasswordDirective 
  ]

})

export class AuthenticationModule { }
