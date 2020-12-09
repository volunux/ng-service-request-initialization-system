import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../../general/general.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralRequestModule } from '../../../shared/general-request/general-request.module';
import { SimplesModule } from '../../../shared/simples/simples.module';

import { SchoolResultRoutingModule } from './school-result-routing.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';

@NgModule({
  declarations: [

  ],
 
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneralRequestModule,
    SimplesModule,
    GeneralModule,
    GeneralServicesModule,
    SchoolResultRoutingModule
  ],

  providers : [
  
  ]

})

export class SchoolResultModule { 

}
