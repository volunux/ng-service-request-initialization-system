import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestAllModule } from '../request-all/request-all.module';
import { CourseRegistrationRoutingModule } from './course-registration-routing.module';



@NgModule({
  declarations: [

  ],
 
  imports: [
    CommonModule,
    RequestAllModule,
    CourseRegistrationRoutingModule
  ],

  providers : [

  ]

})

export class CourseRegistrationModule { 

}
