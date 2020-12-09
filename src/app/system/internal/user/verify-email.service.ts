import { Injectable , Inject } from '@angular/core';

import { Api , Api_Token } from '../../../configuration';

import { General } from './general';

import { Observable , of } from 'rxjs';

import { catchError , filter , first , map , switchMap , delay , tap , take , debounceTime , distinctUntilChanged } from 'rxjs/operators';

import { AsyncValidator , AsyncValidatorFn , AbstractControl , ValidationErrors } from '@angular/forms'

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from '../../../authentication/authentication.service';

@Injectable({

  'providedIn' : 'root'

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

     if (!control.dirty) return of(null);

    let entry = control.value;

    let link = `${apiConfig.host}/authenticate/emailaddress/${entry}`;

    let $result = {'emailAddressService' : {'value' : control.value } }

    let lastEmailAddress = null;

       return control.valueChanges.pipe(

          filter((emailAddress) => { return emailAddress != lastEmailAddress }) ,

          take(1) ,

          delay(3000) ,

          switchMap((emailAddress) => { lastEmailAddress = emailAddress;

           return http.get(link); }) ,

          map((emailAddress : General) => { return emailAddress.isAvailable ? null : $result } ) ,

          first() ,

          catchError((error) => { return of($result); })
                
          )
     }

}