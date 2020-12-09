import { Directive , Input } from '@angular/core';

import { ValidatorFn , Validator , ValidationErrors , AbstractControl , FormGroup , NG_VALIDATORS } from '@angular/forms';

@Directive({

  selector: '[appForbiddenNames]' ,

  providers : [{'provide' : NG_VALIDATORS , 'useExisting' : EmailAddressDirective , 'multi' : true}]

})

export class EmailAddressDirective implements Validator {

  constructor() { 

  }

  @Input('emailAddress') emailAddress : string;

  validate(control : AbstractControl) : {[key : string] : any} | null {

  	return this.emailAddress ? emailAddressValidator(new RegExp(this.emailAddress , 'i'))(control) : null 
  }

}


export function emailAddressValidator(emailAddress : RegExp) : ValidatorFn {

	return (control : AbstractControl) : { [key : string] : any} | null => {

		const email = emailAddress.test(control.value);

		return !email ? {'emailAddress' : {'value' : control.value } } : null }
	}
