import { Injectable , Inject } from '@angular/core';

import { Api , Api_Token } from '../configuration';

import { HttpClient , HttpResponse , HttpErrorResponse } from '@angular/common/http';

import { User } from './user';

import { AuthResponse } from './authresponse';

import { Observable , throwError } from 'rxjs';

import { catchError , tap } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'

})

export class DataService {

  constructor(@Inject(Api_Token) private apiConfig : Api , private http : HttpClient) { 

  }

  public signIn(user : User) : Observable<AuthResponse> {

  	let link = `${this.apiConfig.host}/signin`;

  	return this.http.post<AuthResponse>(link , user);

  }

  public createUser() : Observable<{'Country' : string[] , 'Department' : string[] , 'Faculty' : string[] , 'Level' : string[]}> {

    let link = `${this.apiConfig.host}/signup`;

    return this.http.get<{'Country' : string[] , 'Department' : string[] , 'Faculty' : string[] , 'Level' : string[]}>(link)

      .pipe(
              catchError((error) : Observable<any> => {

                  return throwError(error);
              })
        )
  }

  public signUp(user : User) : Observable<AuthResponse> {

  	let link = `${this.apiConfig.host}/signup`;

  	return this.http.post<AuthResponse>(link , user)

  		.pipe(
        catchError(this.handleError<any>('Faculty Entry or Entries Delete')

              )
  				)
	  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { let errArr = [];

        if (error) {

          if (error.error.message) { let compiledError = Object.assign({'resource' : operation } , errArr); 

                  return throwError(compiledError);}

          else if (error.error && !error.error.message) {

           for (let prop in error.error) { errArr.push(error.error[prop]); }  

              let compiledError = Object.assign({'resource' : operation } , {'errors' : errArr} , error);  

                  return throwError(compiledError);}

          else { let compiledError = Object.assign({'resource' : operation } , error); 

                  return throwError(compiledError);}
      }  }
  }



}
