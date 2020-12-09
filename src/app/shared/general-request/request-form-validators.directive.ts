import { Directive } from '@angular/core';

import { NG_VALIDATORS , AbstractControl ,  Validator , ValidatorFn , ValidationErrors } from '@angular/forms';

@Directive({

  'selector' : '[appGeneralRequestFormValidatorsNumber]' ,

  'providers' : [{'provide' : NG_VALIDATORS , 'useExisting' : GeneralRequestFormValidatorNumberDirective , 'multi' : true }]

})

export class GeneralRequestFormValidatorNumberDirective implements Validator {

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

  'selector' : '[appGeneralRequestFormValidatorsShortCode]' ,

  'providers' : [{'provide' : NG_VALIDATORS , 'useExisting' : GeneralRequestFormValidatorShortCodeDirective , 'multi' : true }]

})

export class GeneralRequestFormValidatorShortCodeDirective implements Validator {

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

  'selector' : '[appGeneralRequestFormValidatorsStatus]' ,

  'providers' : [{'provide' : NG_VALIDATORS , 'useExisting' : GeneralRequestFormValidatorStatusDirective , 'multi' : true }]

})

export class GeneralRequestFormValidatorStatusDirective implements Validator {

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

  'selector' : '[appGeneralRequestFormValidatorsRole]' ,

  'providers' : [{'provide' : NG_VALIDATORS , 'useExisting' : GeneralRequestFormValidatorRoleDirective , 'multi' : true }]

})

export class GeneralRequestFormValidatorRoleDirective implements Validator {

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

  'selector' : '[appGeneralRequestFormValidatorsSearch]' ,

  'providers' : [{'provide' : NG_VALIDATORS , 'useExisting' : GeneralRequestFormValidatorSearchDirective , 'multi' : true }]

})

export class GeneralRequestFormValidatorSearchDirective implements Validator {

  constructor() { 

  }

  validate(control : AbstractControl) : ValidationErrors | null {

    let searches : string[] = ['applicationNumber' , 'requestType' , 'status'];

    let $searches : string[] = ['Application Number' , 'requestType' , 'Status'];

    let entry = control.value;

    return entry != '' && searches.indexOf(entry) < 0 ? {'searchError' : {'value' : entry , 'searches' : $searches}} : null
  }

}

export function searchValidator() : ValidatorFn {

  return (control : AbstractControl) : ValidationErrors | null => {

    let searches : string[] = ['applicationNumber' , 'requestType' , 'status'];

    let $searches : string[] = ['Application Number' , 'requestType' , 'Status'];

    let entry = control.value;

    return entry != '' && searches.indexOf(entry) < 0 ? {'searchError' : {'value' : entry , 'searches' : $searches}} : null
  }

}