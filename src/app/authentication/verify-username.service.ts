import { Injectable } from '@angular/core';

import { Observable , of } from 'rxjs';

import { catchError , map , tap } from 'rxjs/operators';

import { AsyncValidator , AsyncValidatorFn , AbstractControl , ValidationErrors } from '@angular/forms'

@Injectable({

  providedIn : 'root'

})

export class VerifyUsernameValidator implements AsyncValidator {

  constructor() { 

  }

  validate(control : AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null>  {

  	if (true) {

  		return of(null)

  			.pipe(map((val) => val))
  	}

  	else {

  		let username = {'usernameService' : {'exists' : true} };

  		return of(username);
  	}

  }

}


export function usernameVerification(authenticationService , http , httpHeaders , apiConfig) : AsyncValidatorFn {

   return (control : AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>  {

    let entry = control.value , link = `${apiConfig.host}/authenticate/username/${entry}`;

    return http.get(link)

      .pipe(

          map((username) => { return username ? {'userNameService' : {'value' : control.value } } : null }) ,

          catchError((error) => { return of(null);  })

        );
  }

}