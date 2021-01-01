import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginationComponent } from './pagination/pagination.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { FileAttachmentsTwoComponent } from './file-attachments-two/file-attachments-two.component';
import { AttachmentUploadComponent } from './attachment-upload/attachment-upload.component';

import { AttachmentUploadService } from './attachment-upload/attachment-upload.service';

@NgModule({

  declarations: [
  	PaginationComponent,
  	GuidelinesComponent,
    FileAttachmentsTwoComponent,
    AttachmentUploadComponent,
  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],

  providers : [

    AttachmentUploadService
  ],
  
  exports : [
  	PaginationComponent,
    GuidelinesComponent,
    FileAttachmentsTwoComponent,
    AttachmentUploadComponent
  ]
})
export class SimplesModule { 

}
