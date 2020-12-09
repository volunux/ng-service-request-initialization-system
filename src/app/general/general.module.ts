import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ResourceUnavailableComponent } from './resource-unavailable/resource-unavailable.component';
import { NotificationScreenComponent } from './notification-screen/notification-screen.component';
import { ListEntryOptionsComponent } from './list-entry-options/list-entry-options.component';
import { DeleteAllEntryComponent } from './delete-all-entry/delete-all-entry.component';
import { CapitalizeDirective } from './capitalize.directive';
import { LowercaseDirective } from './lowercase.directive';
import { ViewDescriptionComponent } from './view-description/view-description.component';

import { FileAttachmentsComponent } from './file-attachments/file-attachments.component';
import { ReplaceLineBreakPipe } from './replace-line-break.pipe';
import { ProposedCredentialPipe } from './proposed-credential.pipe';
import { ReplaceTabsPipe } from './replace-tabs.pipe';

@NgModule({

  declarations: [

      ResourceUnavailableComponent,
      NotificationScreenComponent,
      ListEntryOptionsComponent,
      DeleteAllEntryComponent,
      CapitalizeDirective,
      LowercaseDirective,
      ViewDescriptionComponent,
      FileAttachmentsComponent,
      ReplaceLineBreakPipe,
      ProposedCredentialPipe,
      ReplaceTabsPipe,
		],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],

  exports : [
    NotificationScreenComponent,
    ResourceUnavailableComponent,
    ListEntryOptionsComponent,
    DeleteAllEntryComponent,
    CapitalizeDirective,
    LowercaseDirective,
    ViewDescriptionComponent,
    FileAttachmentsComponent,
    ReplaceLineBreakPipe,
    ProposedCredentialPipe,
    ReplaceTabsPipe,
  ]

})

export class GeneralModule { }
