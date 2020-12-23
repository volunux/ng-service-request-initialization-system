import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcronymPipe } from './acronym.pipe';
import { ReplaceLineBreakPipe } from './replace-line-break.pipe';
import { ProposedCredentialPipe } from './proposed-credential.pipe';
import { ReplaceTabsPipe } from './replace-tabs.pipe';

@NgModule({

  declarations: [
		AcronymPipe,
    ReplaceLineBreakPipe,
    ProposedCredentialPipe,
    ReplaceTabsPipe,
  ],
 
  imports: [
    CommonModule
  ],

  exports : [

		AcronymPipe,
    ReplaceLineBreakPipe,
    ProposedCredentialPipe,
    ReplaceTabsPipe,
  ]

})

export class PipesModule { 

}
