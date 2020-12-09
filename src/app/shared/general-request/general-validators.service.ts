import { AbstractControl ,  Validator , ValidatorFn , ValidationErrors } from '@angular/forms';


export function statusValidator() : ValidatorFn {

  let $statuses : string[] = ['Fulfilled' , 'Rejected' , 'Update'];

  let statuses : RegExp = /Fulfilled|Rejected|Update/i;

  return (control : AbstractControl) : ValidationErrors | null => {

    let entry = control.value;

    return !statuses.test(entry) ? {'statusError' : {'value' : entry , 'statuses' : $statuses}} : null
  }

}
