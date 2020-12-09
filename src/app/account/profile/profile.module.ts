import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserModule } from '../../system/internal/user/user.module';
import { GeneralServicesModule } from '../../shared/services/general-services.module';
import { SimplesModule } from '../../shared/simples/simples.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ProfileDeactivateComponent } from './profile-deactivate/profile-deactivate.component';
import { ProfileReactivateComponent } from './profile-reactivate/profile-reactivate.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeSignaturePictureComponent } from './change-signature-picture/change-signature-picture.component';
import { ProfileValidatorComponent } from './profile-validator/profile-validator.component';

import { GeneralModule } from '../../general/general.module';
import { FileControlComponent } from './file-control/file-control.component';

import { UserFormValidatorNumberDirective } from './user-form-validators.directive';

import { ProfileService } from './profile.service';
import { ProfileFileControlService } from './profile-file-control.service';
import { ProfileFormService } from './profile-form.service';

@NgModule({
  declarations: [

  ProfileComponent, 
  ProfileDashboardComponent, 
  ProfileDetailComponent, 
  ProfileUpdateComponent, 
  ProfileDeactivateComponent, 
  ProfileReactivateComponent, 
  ChangePasswordComponent, 
  ChangeSignaturePictureComponent,
  ProfileValidatorComponent,
  FileControlComponent,
  UserFormValidatorNumberDirective
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneralModule,
    SimplesModule,
    GeneralServicesModule,
    ProfileRoutingModule,
    UserModule,
  ] ,

  providers : [

  ProfileFormService,
  ProfileService,
  ProfileFileControlService
  ]

})

export class ProfileModule { 

}
