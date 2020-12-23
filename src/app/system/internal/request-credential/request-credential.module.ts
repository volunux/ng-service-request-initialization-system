import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestCredentialRoutingModule } from './request-credential-routing.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';

import { RequestCredentialListComponent } from './request-credential-list/request-credential-list.component';
import { InternalAllModule } from '../internal-all/internal-all.module';
import { SimplesModule } from '../../../shared/simples/simples.module';
import { GeneralModule } from '../../../general/general.module';

import { RequestCredentialService } from './request-credential.service';

@NgModule({
  declarations: [

  RequestCredentialListComponent,

  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    InternalAllModule,
    GeneralModule,
    GeneralServicesModule,
    SimplesModule,
    RequestCredentialRoutingModule,
  ],
  providers : [

    RequestCredentialService,

  ],

  exports : [
  
  ]

})

export class RequestCredentialModule { 

}
