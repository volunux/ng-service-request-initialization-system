import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { FacultyComponent } from './faculty/faculty.component';

import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';

import { FacultyPaymentEntriesComponent } from './faculty-payment-entries/faculty-payment-entries.component';

import { FacultyPaymentEntryDetailComponent } from './faculty-payment-entry-detail/faculty-payment-entry-detail.component';

import { FacultyPaymentEntryCreateComponent } from './faculty-payment-entry-create/faculty-payment-entry-create.component';

import { FacultyPaymentValidationComponent } from './faculty-payment-validation/faculty-payment-validation.component';

const routes: Routes = [

	{'path' : '' ,

		'component' : FacultyComponent , 

		'children' : [

	{'path' : '' , 'component' : FacultyDashboardComponent } ,

	{'path' : 'create' , 'component' : FacultyPaymentEntryCreateComponent } ,

	{'path' : 'entry/detail/:entry' , 'component' : FacultyPaymentEntryDetailComponent } ,

	{'path' : 'validation' , 'component' : FacultyPaymentValidationComponent } ,

	{'path' : 'entries' , 'component' : FacultyPaymentEntriesComponent } ,


	]	}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class FacultyRoutingModule { 

}
