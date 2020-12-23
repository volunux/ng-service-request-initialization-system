import { AbstractControl , FormGroup , ValidatorFn , ValidationErrors } from '@angular/forms';

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

export function numberValidator() : ValidatorFn {

  return (control : AbstractControl) : ValidationErrors | null => {

    let entry = control.value;

      return Number.isInteger(entry) ? null : {'numError' : {'value' : entry.value}}
  }

}

export function shortCodeValidator() : ValidatorFn {

  return (control : AbstractControl) : ValidationErrors | null => {

    let entry = control.value;

      return Number.isInteger(entry) ? null : {'shortCodeError' : {'value' : entry}}
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
