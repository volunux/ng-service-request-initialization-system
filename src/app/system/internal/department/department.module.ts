import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentRoutingModule } from './department-routing.module';

import { InternalAllModule } from '../internal-all/internal-all.module';
import { InternalDepartmentEntriesComponent } from './internal-department-entries/internal-department-entries.component';


@NgModule({
  declarations: [


  InternalDepartmentEntriesComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    InternalAllModule,
    DepartmentRoutingModule,
  ],

  providers : [

  ],

  exports : [
  ]

})

export class DepartmentModule { 

}
