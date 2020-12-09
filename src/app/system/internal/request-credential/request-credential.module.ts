import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestCredentialRoutingModule } from './request-credential-routing.module';

import { RequestCredentialListComponent } from './request-credential-list/request-credential-list.component';
import { InternalAllModule } from '../internal-all/internal-all.module';

@NgModule({
  declarations: [

  RequestCredentialListComponent,

  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    InternalAllModule,
    RequestCredentialRoutingModule,
  ],
  providers : [

  ],

  exports : [
  
  ]

})

export class RequestCredentialModule { 

}
