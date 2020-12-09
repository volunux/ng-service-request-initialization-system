import { AbstractControl , ValidatorFn , ValidationErrors } from '@angular/forms';

export function payerPhoneValidator() : ValidatorFn {

  return (control : AbstractControl) : ValidationErrors | null => {

    let entry = control.value;

    if (entry.startsWith('+234') && entry.length > 14) {

     return {'payerPhoneIntl' : {'value' : entry } };	}

    else if ((!entry.startsWith('+234')) && entry.length > 11) { return {'payerPhone' : {'value' : entry } };	}

    else { return null;	}


  }

}