import { AbstractControl , ValidationErrors , ValidatorFn } from '@angular/forms';

export function emailAddressValidator(emailAddress : RegExp) : ValidatorFn {

	return (control : AbstractControl) : ValidationErrors | null => {

		const entry = emailAddress.test(control.value);

		return !entry ? {'emailAddress' : {'value' : control.value } } : null }
	}
