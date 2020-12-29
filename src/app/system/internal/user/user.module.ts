import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { SimplesModule } from '../../../shared/simples/simples.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { GeneralModule } from '../../../general/general.module';
import { GeneralAllModule } from '../../../shared/general-all/general-all.module';
import { PipesModule } from '../../../shared/pipes/pipes.module';
import { UserAccountModule } from '../../../shared/user-account/user-account.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserDeleteAllComponent } from './user-delete-all/user-delete-all.component';


import { UserService } from './user.service';
import { AccountReactivateComponent } from './account-reactivate/account-reactivate.component';

import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  declarations: [

  UserListComponent,
  UserComponent,
  UserDetailComponent,
  UserUpdateComponent,
  UserCreateComponent,
  UserDeleteComponent,
  UserDeleteAllComponent,
  AccountReactivateComponent,
  UserHomeComponent,

  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralAllModule,
    SimplesModule,
    PipesModule,
    GeneralServicesModule,
    UserAccountModule,
    UserRoutingModule,
  ],
  
  providers : [

  UserService,

  ],

  exports : [

  ]

})

export class UserModule { 

}
