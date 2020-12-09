import { ValidatorFn , Validator , AbstractControl , ValidationErrors } from '@angular/forms';


export function dynamicDataValidator(data , name) : ValidatorFn {

	return (control : AbstractControl) : ValidationErrors | null => {

    let entry = control.value;

    let $data = data.map((item) => item._id);

  	return entry != '' && $data.indexOf(entry) < 0 ? {[name] : {'value' : entry , 'name' : name} } : null;
	
	}

}