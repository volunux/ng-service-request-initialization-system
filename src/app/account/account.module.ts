import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { GeneralModule } from '../general/general.module';

import { AccountRoutingModule } from './account-routing.module';

import { ProfileModule } from './profile/profile.module';


@NgModule({

  declarations: [

  ],

  imports: [
    CommonModule,
		GeneralModule,
    AccountRoutingModule,

  ]
})
export class AccountModule { }
