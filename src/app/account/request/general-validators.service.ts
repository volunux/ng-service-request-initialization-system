import { Directive } from '@angular/core';

import { NG_VALIDATORS , AbstractControl ,  Validator , ValidatorFn , ValidationErrors } from '@angular/forms';


@Directive({

  'selector' : '[appGeneralRequestFormValidatorsStatus]' ,

  'providers' : [{'provide' : NG_VALIDATORS , 'useExisting' : GeneralRequestFormValidatorStatusDirective , 'multi' : true }]

})

export class GeneralRequestFormValidatorStatusDirective implements Validator {

  constructor() { 

  }

  validate(control : AbstractControl) : ValidationErrors | null {

  let $statuses : string[] = ['Fulfilled' , 'Rejected' , 'Update'];

  let statuses : RegExp = /Fulfilled|Rejected|Update/i;

    let entry = control.value;

    return statuses.test(entry) ? {'statusError' : {'value' : entry , 'statuses' : $statuses}} : null
  }

}

export function statusValidator() : ValidatorFn {

  let $statuses : string[] = ['Fulfilled' , 'Rejected' , 'Update'];

  let statuses : RegExp = /Fulfilled|Rejected|Update/i;

  return (control : AbstractControl) : ValidationErrors | null => {

    let entry = control.value;

    return !statuses.test(entry) ? {'statusError' : {'value' : entry , 'statuses' : $statuses}} : null
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