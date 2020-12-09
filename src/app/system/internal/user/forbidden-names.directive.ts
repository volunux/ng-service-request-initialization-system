import { Directive , Input } from '@angular/core';

import { ValidatorFn , Validator , ValidationErrors , AbstractControl , FormGroup , NG_VALIDATORS } from '@angular/forms';

@Directive({

  selector: '[appForbiddenNames]' ,

  providers : [{'provide' : NG_VALIDATORS , 'useExisting' : ForbiddenNamesDirective , 'multi' : true}]

})

export class ForbiddenNamesDirective implements Validator {

  constructor() { 

  }

  @Input('forbiddenNames') forbiddenNames : string;

  validate(control : AbstractControl) : {[key : string] : any} | null {

  	return this.forbiddenNames ? forbiddenNamesValidator(new RegExp(this.forbiddenNames , 'i'))(control) : null 
  }

}


export function forbiddenNamesValidator(name : RegExp) : ValidatorFn {

  let $names : string[] = ['Student' , 'Department President' , 'Faculty President' , 'Lecturer' , 'Staff' ,

                    'Head of Department' , 'Dean of Faculty' , 'Bursar' , 'Moderator' , 'Administrator' , 'Super Administrator'];

  let names : RegExp = /moderator|administrator|superAdministrator|hod|deanstudent|departmentPresident|facultyPresident|bursar|lecturer|staff/i;

	return (control : AbstractControl) : { [key : string] : any} | null => {

		const forbidden = names.test(control.value);

		return forbidden ? {forbiddenNames : {'value' : control.value , 'names' : $names} } : null }
	}

export function firstLastNames() : ValidatorFn {

	return (controlsAncestor : FormGroup) : ValidationErrors | null => {

		const firstName = controlsAncestor.get('firstName');

		const lastName = controlsAncestor.get('lastName');

			return firstName && lastName && firstName.value == lastName.value ? {'bothNames' : {'value' : firstName.value + lastName.value } } : null;
	}
}
