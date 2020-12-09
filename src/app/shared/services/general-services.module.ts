import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessagesService } from './error-messages.service';
import { NotificationService } from './notification.service';
import { GeneralSearchService } from './general-search.service';
import { FileControlService } from './file-control.service';
import { EntryUpdateDialogService } from './entry-update-dialog.service';

@NgModule({

  declarations: [

  ],
  
  imports: [
    CommonModule,
  ] ,

  exports : [

  ] ,

  providers : [

    ErrorMessagesService,
    NotificationService,
    GeneralSearchService,
    FileControlService,
    EntryUpdateDialogService
  ]



})

export class GeneralServicesModule { 

}
