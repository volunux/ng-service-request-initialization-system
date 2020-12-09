import { Directive } from '@angular/core';

import { NG_VALIDATORS , AbstractControl ,  Validator , ValidatorFn , ValidationErrors } from '@angular/forms';

@Directive({

  'selector' : '[appUserFormValidatorsNumber]' ,

  'providers' : [{'provide' : NG_VALIDATORS , 'useExisting' : UserFormValidatorNumberDirective , 'multi' : true }]

})

export class UserFormValidatorNumberDirective implements Validator {

  constructor() { 

  }

  validate(control : AbstractControl) : ValidationErrors | null {

  	let entry = +control.value;

  	return Number.isInteger(entry) ? null : {'numberError' : {'value' : entry}}
  }

}

export function numberValidator() : ValidatorFn {

	return (control : AbstractControl) : ValidationErrors | null => {

		let entry = +control.value;

			return Number.isInteger(entry) ? null : {'numberError' : {'value' : entry}}
	}

}

@Directive({

  'selector' : '[appUserFormValidatorsShortCode]' ,

  'providers' : [{'provide' : NG_VALIDATORS , 'useExisting' : UserFormValidatorShortCodeDirective , 'multi' : true }]

})

export class UserFormValidatorShortCodeDirective implements Validator {

  constructor() { 

  }

  validate(control : AbstractControl) : ValidationErrors | null {

  	let entry = control.value;

  	return Number.isInteger(entry) ? null : {'shortCodeError' : {'value' : entry}}
  }

}

export function shortCodeValidator() : ValidatorFn {

	return (control : AbstractControl) : ValidationErrors | null => {

		let entry = control.value;

			return Number.isInteger(entry) ? null : {'shortCodeError' : {'value' : entry}}
	}

}


@Directive({

  'selector' : '[appUserFormValidatorsStatus]' ,

  'providers' : [{'provide' : NG_VALIDATORS , 'useExisting' : UserFormValidatorStatusDirective , 'multi' : true }]

})

export class UserFormValidatorStatusDirective implements Validator {

  constructor() { 

  }

  validate(control : AbstractControl) : ValidationErrors | null {

  let $statuses : string[] = ['Active' , 'Banned' , 'Deactivated' , 'Inactive' , 'Pending'];

  let statuses : RegExp = /active|banned|deactivated|inactive|pending/i;

    let entry = control.value;

    return statuses.test(entry) ? {'statusError' : {'value' : entry , 'statuses' : $statuses}} : null
  }

}

export function statusValidator() : ValidatorFn {

  let $statuses : string[] = ['Active' , 'Banned' , 'Deactivated' , 'Inactive' , 'Pending'];

  let statuses : RegExp = /active|banned|deactivated|inactive|pending/i;

  return (control : AbstractControl) : ValidationErrors | null => {

    let entry = control.value;

    return statuses.test(entry) ? {'statusError' : {'value' : entry , 'statuses' : $statuses}} : null
  }

}

@Directive({

  'selector' : '[appUserFormValidatorsRole]' ,

  'providers' : [{'provide' : NG_VALIDATORS , 'useExisting' : UserFormValidatorRoleDirective , 'multi' : true }]

})

export class UserFormValidatorRoleDirective implements Validator {

  constructor() { 

  }

  validate(control : AbstractControl) : ValidationErrors | null {

  let $roles : string[] = ['Student' , 'Department President' , 'Faculty President' , 'Lecturer' , 'Staff' ,

                    'Head of Department' , 'Dean of Faculty' , 'Bursar' , 'Moderator' , 'Administrator' , 'Super Administrator'];

  let roles : RegExp = /moderator|administrator|superAdministrator|hod|deanstudent|departmentPresident|facultyPresident|bursar|lecturer|staff/i;

    let entry = control.value;

    return roles.test(entry) ? {'roleError' : {'value' : entry , 'roles' : $roles}} : null
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


@Directive({

  'selector' : '[appUserFormValidatorsSearch]' ,

  'providers' : [{'provide' : NG_VALIDATORS , 'useExisting' : UserFormValidatorSearchDirective , 'multi' : true }]

})

export class UserFormValidatorSearchDirective implements Validator {

  constructor() { 

  }

  validate(control : AbstractControl) : ValidationErrors | null {

    let searches : string[] = ['department' , 'emailAddress' , 'faculty' , 'identityNumber' , 'level' , 'role' ,'status' ];

    let $searches : string[] = ['Department' , 'Email Address' , 'Faculty' , 'Identity Number' , 'Level' , 'Role' , 'Status'];

    let entry = control.value;

    return entry != '' && searches.indexOf(entry) < 0 ? {'searchError' : {'value' : entry , 'searches' : $searches}} : null
  }

}

export function searchValidator() : ValidatorFn {

  return (control : AbstractControl) : ValidationErrors | null => {

    let searches : string[] = ['department' , 'emailAddress' , 'faculty' , 'identityNumber' , 'level' , 'role' ,'status' ];

    let $searches : string[] = ['Department' , 'Email Address' , 'Faculty' , 'Identity Number' , 'Level' , 'Role' , 'Status'];

    let entry = control.value;

    return entry != '' && searches.indexOf(entry) < 0 ? {'searchError' : {'value' : entry , 'searches' : $searches}} : null
  }

}