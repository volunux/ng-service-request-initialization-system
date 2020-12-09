import { Injectable , Inject } from '@angular/core';

import { Api , Api_Token } from '../../configuration';

import { General } from '../interfaces/general';

import { Observable , of } from 'rxjs';

import { catchError , filter , first , map , switchMap , delay , tap , take , debounceTime , distinctUntilChanged } from 'rxjs/operators';

import { AsyncValidator , AsyncValidatorFn , AbstractControl , ValidationErrors } from '@angular/forms'

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from '../../authentication/authentication.service';


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