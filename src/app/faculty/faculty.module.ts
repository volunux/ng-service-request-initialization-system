import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { FacultyRoutingModule } from './faculty-routing.module';

import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyGetStartedComponent } from './faculty-get-started/faculty-get-started.component';
import { FacultyDetailComponent } from './faculty-detail/faculty-detail.component';
import { FacultyUpdateComponent } from './faculty-update/faculty-update.component';
import { FacultyCreateComponent } from './faculty-create/faculty-create.component';
import { FacultyDeleteComponent } from './faculty-delete/faculty-delete.component';
import { FacultyDeleteAllComponent } from './faculty-delete-all/faculty-delete-all.component';
import { FirstComponent } from './first/first.component';

import { GeneralModule } from '../general/general.module';
import { FacultyValidatorComponent } from './faculty-validator/faculty-validator.component';
import { FacultyValidatorService } from './faculty-validator.service';


@NgModule({
  declarations: [

  FacultyListComponent,
  FacultyComponent,
  FacultyGetStartedComponent,
  FacultyDetailComponent,
  FacultyUpdateComponent,
  FacultyCreateComponent,
  FacultyDeleteComponent,
  FacultyDeleteAllComponent,
  FirstComponent,
  FacultyValidatorComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralModule,
    FacultyRoutingModule,
  ],
  providers : [FacultyValidatorService],

  exports : [
  ]
})
export class FacultyModule { }
