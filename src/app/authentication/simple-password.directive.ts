import { Directive } from '@angular/core';

import { NG_VALIDATORS , ValidatorFn , Validator , AbstractControl , ValidationErrors } from '@angular/forms';

@Directive({

  selector: '[appSimplePassword]' ,

  'providers' : [ {'provide' : NG_VALIDATORS , 'useExisting' : SimplePasswordDirective , 'multi' : false } ]

})

export class SimplePasswordDirective implements Validator {

  constructor() { 

  }

  validate(control : AbstractControl) : ValidationErrors | null {

  	let passwordList = ['123456789' , '1234567890' , '12345'];

  	let entry = '' + control.value;

  	let passwordValid = passwordList.indexOf(entry);

  	return passwordValid ? {'simplePassword' : {'value' : control.value} } : null

  }

}


export function simplePasswordValidator() : ValidatorFn {

	return (control : AbstractControl) : ValidationErrors | { [key : string] : {[value : string] : any } } | null => {
  	
  	let passwordList = ['123456789' , '1234567890' , '12345'];

  	let entry = '' + control.value;

  	let passwordValid = passwordList.indexOf(entry);

  	return passwordValid >= 0 ? {'simplePassword' : {'value' : control.value} } : null
	
	}

}