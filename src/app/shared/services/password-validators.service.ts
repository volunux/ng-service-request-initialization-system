import { AbstractControl , FormGroup , ValidatorFn , ValidationErrors } from '@angular/forms';

export function simplePasswordValidator() : ValidatorFn {

  return (control : AbstractControl) : ValidationErrors | null => {
    
    let passwordList = ['123456789' , '1234567890' , '12345' , 'abcdef'];

    let entry = '' + control.value;

    let passwordValid = passwordList.indexOf(entry);

    return passwordValid > -1 ? {'simplePassword' : {'value' : control.value} } : null
  
  }

}

export function confirmPasswordValidator() {

 return (group : FormGroup) : ValidationErrors | null => {

    let password = group.get('newPassword') ? group.get('newPassword').value : null;

    let cPassword = group.get('confirmPassword') ? group.get('confirmPassword') : null;

    if (!password) password = group.get('password') ? group.get('password').value : null;

    if (cPassword) { cPassword.value != password ? cPassword.setErrors({'confirmPassword' : true , 'required' : true , 'minLength' : true , 'maxLength' : true}) : cPassword.setErrors(null); 

    return null;

      }
  
  }

}


export function currentAndNewPasswordValidator() {

 return (group : FormGroup) : ValidationErrors | null => {

    let password = group.get('newPassword') ? group.get('newPassword').value : null;

    let newPassword = group.get('newPassword') ? group.get('newPassword') : null;

    if (!password) password = group.get('password') ? group.get('password').value : null;

    if (newPassword) { newPassword.value == password ? newPassword.setErrors({'currentAndNew' : true , 'required' : true , 'minLength' : true , 'maxLength' : true}) : newPassword.setErrors(null); 

    return null;

      }
  
  }

}