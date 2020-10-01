import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { GeneralModule } from '../general/general.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { SignInComponent } from './sign-in/sign-in.component';

import { SignUpComponent } from './sign-up/sign-up.component';

import { ForbiddenNamesDirective } from './forbidden-names.directive';
import { SimplePasswordDirective } from './simple-password.directive';


@NgModule({

  declarations: [SignInComponent, SignUpComponent, ForbiddenNamesDirective, SimplePasswordDirective],

  imports: [
    CommonModule,
		FormsModule,
    ReactiveFormsModule	,
    GeneralModule ,
    AuthenticationRoutingModule
  ]

})

export class AuthenticationModule { }
