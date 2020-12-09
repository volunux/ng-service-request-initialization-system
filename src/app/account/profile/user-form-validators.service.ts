import { Injectable } from '@angular/core';

import { ValidatorFn , ValidationErrors, AbstractControl , FormGroup } from '@angular/forms';

import { General } from './general';

@Injectable({

  'providedIn' : 'root'

})

export class UserFormValidatorsService {

  constructor() { 

  }

}


export function numberValidator() : ValidatorFn {

	return (control : AbstractControl) : ValidationErrors | null => {

		let entry = control.value;

			return Number.isInteger(entry) ? null : {'numError' : {'value' : entry.value}}
	}

}