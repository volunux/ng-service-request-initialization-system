import { Injectable , Inject } from '@angular/core';

import { Api , Api_Token } from '../configuration';

import { Observable , of } from 'rxjs';

import { catchError , map , switchMap , delay , tap , take , debounceTime , distinctUntilChanged } from 'rxjs/operators';

import { AsyncValidator , AsyncValidatorFn , AbstractControl , ValidationErrors } from '@angular/forms'

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from './authentication.service';

@Injectable({

  providedIn : 'root'

})

export class VerifyEmailAddressValidator implements AsyncValidator {

  constructor(@Inject(Api_Token) private apiConfig : Api , private authenticationService : AuthenticationService , private http : HttpClient) { 

  }

  validate(control : AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null>  {

    let entry = control.value;

    let link = `${this.apiConfig.host}/authenticate/username/${entry}`;

    let httpOptions = {'headers' : new HttpHeaders({'Content-Type' : 'application/json' }) }

    return this.http.get(link , httpOptions)

      .pipe(

          tap((val) => console.log(val))

        );
  }

}

export function emailAddressVerification(authenticationService , http , httpHeaders , apiConfig) : AsyncValidatorFn {

   return (control : AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>  {

    let entry = control.value , link = `${apiConfig.host}/authenticate/emailaddress/${entry}`;

       return control.valueChanges.pipe(

          debounceTime(500),

          distinctUntilChanged() ,

          take(1) ,

          delay(5000) ,

          switchMap((emailAddress) => { return http.get(link); }) ,

          map((emailAddress) => { return emailAddress ? {'emailAddressService' : {'value' : control.value } } : null } ) ,

          catchError((error) => { return of(null);  })
                
          )
     }

}