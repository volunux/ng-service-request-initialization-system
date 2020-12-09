import { AbstractControl , ValidatorFn , ValidationErrors } from '@angular/forms';

import { General } from '../interfaces/general';


export function searchValidator(filters? : General) : ValidatorFn {

  return (control : AbstractControl) : ValidationErrors | null => {

    let searches : string[] = Object.keys(filters);

    let $searches : string[] = Object.values(filters);

    let entry = control.value;

    return entry != '' && searches.indexOf(entry) < 0 ? {'searchError' : {'value' : entry , 'searches' : $searches}} : null
  }

}

export function emailAddressValidator(emailAddress : RegExp) : ValidatorFn {

	return (control : AbstractControl) : ValidationErrors | null => {

		const email = emailAddress.test(control.value);

		return !email ? {'emailAddress' : {'value' : control.value } } : null }
}


export function statusValidator(filters? : General) : ValidatorFn {

  return (control : AbstractControl) : ValidationErrors | null => {

    let statuses : string[] = Object.keys(filters);

    let $statuses : string[] = Object.values(filters);

    let entry = control.value;

    return statuses.indexOf(entry) < 0 ? {'statusError' : {'value' : entry , 'statuses' : $statuses}} : null
  }

}

export function roleValidator() : ValidatorFn {

  let $roles : string[] = ['Student' , 'Department President' , 'Faculty President' , 'Lecturer' , 'Staff' ,

                  'Head of Department' , 'Dean of Faculty' , 'Bursar' , 'Moderator' , 'Administrator' , 'Super Administrator'];

  let roles : RegExp = /moderator|administrator|superAdministrator|hod|deanstudent|departmentPresident|facultyPresident|bursar|lecturer|staff/i;

  return (control : AbstractControl) : ValidationErrors | null => {

    let entry = control.value;

    return roles.test(entry) ? {'roleError' : {'value' : entry , 'roles' : $roles}} : null
  }

}