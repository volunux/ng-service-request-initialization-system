import { Injectable , Inject } from '@angular/core';

import { Api , Api_Token } from '../configuration';

import { HttpClient , HttpResponse , HttpErrorResponse } from '@angular/common/http';

import { User , Payload } from './user';

import { General } from './general';

import { AuthResponse } from './authresponse';

import { Observable , of , throwError } from 'rxjs';

import { catchError , tap } from 'rxjs/operators';

import { ErrorMessagesService1 } from './error-messages.service1';

@Injectable({

   'providedIn' : 'root'
})

export class DataService {

  constructor(@Inject(Api_Token) private apiConfig : Api , private http : HttpClient , private ems : ErrorMessagesService1) { 

  }

  public $systemType : string;

  public signIn(user : User) : Observable<AuthResponse> {

  	let link = `${this.apiConfig.host}/signin`;

  	return this.http.post<AuthResponse>(link , user)

      .pipe(
              catchError(this.handleError<AuthResponse>(`${this.$systemType} Entry` , null))
            )

  }

  public addUser() : Observable<Payload> {

    let link = `${this.apiConfig.host}/signup`;

    return this.http.get<Payload>(link)

      .pipe(
              catchError(this.handleError<AuthResponse>(`${this.$systemType} Entry` , null))
          )
  }

  public $addUser(user : User) : Observable<AuthResponse> {

  	let link = `${this.apiConfig.host}/signup`;

  	return this.http.post<AuthResponse>(link , user)

  		.pipe(
              catchError(this.handleError<AuthResponse>(`${this.$systemType} Entry` , null))
            )
	  }

  public forgotPassword() : Observable<General> {

    let link = `${this.apiConfig.host}/forgot-password/`;

    return this.http.get<General>(link)

      .pipe(
              catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
            )
    }

  public $forgotPassword(details : General) : Observable<General> {

    let link = `${this.apiConfig.host}/forgot-password`;

    return this.http.put<General>(link , details)

      .pipe(
              catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
            )
    }

  public resetPassword(token : string) : Observable<General> {

    let link = `${this.apiConfig.host}/reset/${token}`;

    return this.http.get<General>(link)

      .pipe(
              catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
            )
    }

  public $resetPassword(token , password : General) : Observable<General> {

    let link = `${this.apiConfig.host}/reset/${token}`;

    return this.http.post<General>(link , password)

      .pipe(
              catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
            )
    }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }



}
