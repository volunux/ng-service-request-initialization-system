import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';

import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [

	{'path' : 'signin' , 'component' : SignInComponent , 'data' : {'animation' : 'signin'} } ,

	{'path' : 'signup' , 'component' : SignUpComponent , 'data' : {'animation' : 'signup'} } ,	

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]

})

export class AuthenticationRoutingModule { 

}
