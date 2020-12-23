import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimplesModule } from '../../../shared/simples/simples.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { InternalAllModule } from '../internal-all/internal-all.module';
import { GeneralModule } from '../../../general/general.module';

import { UploadService } from './upload.service';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadEntriesComponent } from './upload-entries/upload-entries.component';


@NgModule({

  declarations: [
  UploadEntriesComponent,

 	],
  
  imports: [
    CommonModule,
    GeneralModule,
    InternalAllModule,
    SimplesModule,
    GeneralServicesModule,
    UploadRoutingModule
  ],
  providers : [
  	UploadService
  ]

})

export class UploadModule { 

}
