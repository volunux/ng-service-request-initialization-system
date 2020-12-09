import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { SimplesModule } from '../../../shared/simples/simples.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { GeneralModule } from '../../../general/general.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserGetStartedComponent } from './user-get-started/user-get-started.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserDeleteAllComponent } from './user-delete-all/user-delete-all.component';


import { UserValidatorComponent } from './user-validator/user-validator.component';

import { UserService } from './user.service';
import { UserFormService } from './user-form.service';
import { UserFormValidatorNumberDirective } from './user-form-validators.directive';
import { UserFormValidatorShortCodeDirective } from './user-form-validators.directive';
import { UserFormValidatorStatusDirective } from './user-form-validators.directive';
import { UserFormValidatorSearchDirective } from './user-form-validators.directive';
import { UserReactivateComponent } from './user-reactivate/user-reactivate.component';
import { UserDeactivateComponent } from './user-deactivate/user-deactivate.component';
import { AccountRequestComponent } from './account-request/account-request.component';
import { AccountRequestDetailComponent } from './account-request-detail/account-request-detail.component';
import { AccountReactivateComponent } from './account-reactivate/account-reactivate.component';
import { AccountDeactivateComponent } from './account-deactivate/account-deactivate.component';

import { AcronymPipe } from './acronym.pipe';
import { AccountRequestUpdateComponent } from './account-request-update/account-request-update.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserFormInputComponent } from './user-form-input/user-form-input.component';

@NgModule({
  declarations: [

  UserListComponent,
  UserComponent,
  UserGetStartedComponent,
  UserDetailComponent,
  UserUpdateComponent,
  UserCreateComponent,
  AcronymPipe,
  UserDeleteComponent,
  UserDeleteAllComponent,
  UserValidatorComponent,
  UserFormValidatorNumberDirective,
  UserFormValidatorShortCodeDirective,
  UserFormValidatorStatusDirective,
  UserFormValidatorSearchDirective,
  UserReactivateComponent,
  UserDeactivateComponent,
  AccountRequestComponent,
  AccountRequestDetailComponent,
  AccountRequestUpdateComponent,
  AccountReactivateComponent,
  AccountDeactivateComponent,
  UserHomeComponent,
  UserFormInputComponent

  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneralModule,
    SimplesModule,
    GeneralServicesModule,
    UserRoutingModule,
  ],
  providers : [

  UserFormService , UserService , AcronymPipe

  ],

  exports : [AcronymPipe , UserGetStartedComponent
  ]
})
export class UserModule { }
