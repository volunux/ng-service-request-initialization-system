import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryRoutingModule } from './country-routing.module';
import { InternalAllModule } from '../internal-all/internal-all.module';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    InternalAllModule,
    CountryRoutingModule,
  ],

})

export class CountryModule { 

}
