import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../general/general.module';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsEntriesComponent } from './statistics-entries/statistics-entries.component';
import { StatisticsDashboardComponent } from './statistics-dashboard/statistics-dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { StatisticsService } from './statistics.service';


@NgModule({
  
  declarations: [

  	StatisticsEntriesComponent,
  	StatisticsDashboardComponent,
  	StatisticsComponent

  ],
  
  imports: [
    CommonModule,
    GeneralModule,
    StatisticsRoutingModule
  ] ,

  providers : [

  	StatisticsService
	]

})

export class StatisticsModule { 

}
