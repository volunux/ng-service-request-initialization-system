import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { GeneralModule } from '../general/general.module';
import { UserAccountModule } from '../shared/user-account/user-account.module';
import { GeneralServicesModule } from '../shared/services/general-services.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { ErrorMessagesService1 } from './error-messages.service1';
import { AuthenticationFormService } from './authentication-form.service';

@NgModule({

  declarations: [

    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent

  ],

  imports: [
    CommonModule,
		FormsModule,
    ReactiveFormsModule,
    GeneralModule,
    UserAccountModule,
    GeneralServicesModule,
    AuthenticationRoutingModule
  ],
  
  exports : [
  ] ,

  providers : [

    ErrorMessagesService1,
    AuthenticationFormService
  ]

})

export class AuthenticationModule { 

}
