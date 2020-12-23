import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { SimplesModule } from '../../../shared/simples/simples.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { GeneralModule } from '../../../general/general.module';
import { GeneralAllModule } from '../../../shared/general-all/general-all.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserDeleteAllComponent } from './user-delete-all/user-delete-all.component';


import { UserValidatorComponent } from './user-validator/user-validator.component';

import { UserService } from './user.service';
import { UserFormService } from './user-form.service';
import { AccountReactivateComponent } from './account-reactivate/account-reactivate.component';

import { UserHomeComponent } from './user-home/user-home.component';
import { UserFormInputComponent } from './user-form-input/user-form-input.component';

@NgModule({
  declarations: [

  UserListComponent,
  UserComponent,
  UserDetailComponent,
  UserUpdateComponent,
  UserCreateComponent,
  UserDeleteComponent,
  UserDeleteAllComponent,
  UserValidatorComponent,
  AccountReactivateComponent,
  UserHomeComponent,
  UserFormInputComponent

  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralAllModule,
    SimplesModule,
    GeneralServicesModule,
    UserRoutingModule,
  ],
  
  providers : [

  UserFormService,
  UserService,

  ],

  exports : [

  ]

})

export class UserModule { 

}
