import { Injectable , Inject } from '@angular/core';

import { Observable , of } from 'rxjs';

import { catchError , map , tap } from 'rxjs/operators';

import { HttpClient , HttpErrorResponse } from '@angular/common/http';

import { User } from './user';

import { General } from './general';

import { Api_Token , Api } from '../../configuration';

import { ErrorMessagesService } from '../../shared/services/error-messages.service';


@Injectable()

export class ProfileService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public sa : string = 'user';

  public systemType : string = 'User';

  public entryExist() : Observable<User> {

  	let link = `${this.apiConfig.host}/${this.sa}/entry/change-password`;

  	return this.http.get<User>(link)

  		.pipe(

  				tap((value) => console.log(value)) ,

  				catchError(this.handleError<User>(`${this.systemType} Entry` , null))
  			)

  }

  public profileDetail() : Observable<User> {

  	let link = `${this.apiConfig.host}/${this.sa}/entry/detail`;

  	return this.http.get<User>(link)

  		.pipe(

  				tap((value) => console.log(value)) ,

  				catchError(this.handleError<User>(`${this.systemType} Entry` , null))
  			)

  }

  public profileUpdate() : Observable<User> {

  	let link = `${this.apiConfig.host}/${this.sa}/entry/update`;

  	return this.http.get<User>(link)

  		.pipe(

  				tap((value) => console.log(value)) ,

  				catchError(this.handleError<User>(`${this.systemType} Entry` , null))
  			)

  }

  public $profileUpdate(idx : string , user : User) : Observable<any> {

  	let link = `${this.apiConfig.host}/${this.sa}/entry/update`;

  	return this.http.put<User>(link , user)

  		.pipe(

  				tap((value) => console.log(value)) ,

					map((entry : User) => { return {'updated' : true , '$data' : entry}; }) ,

  				catchError(this.handleError<User>(`${this.systemType} Entry` , null))
  			)

  }

  public changePassword(passcode : General) : Observable<General> {

  	let link = `${this.apiConfig.host}/${this.sa}/entry/change-password`;

  	return this.http.put<User>(link , passcode)

  		.pipe(

  				tap((value) => console.log(value)) ,

          map((entry : User) => { return {'updated' : true , '$data' : entry}; }) ,

  				catchError(this.handleError<User>(`${this.systemType} Entry` , null))
  			)

  }

  public deactivateProfile() : Observable<User> {

  	let link = `${this.apiConfig.host}/${this.sa}/entry/deactivate`;

  	return this.http.get<User>(link)

  		.pipe(

  				tap((value) => console.log(value)) ,

  				catchError(this.handleError<User>(`${this.systemType} Entry` , null))
  			)

  }

  public $deactivateProfile(user : User) : Observable<General> {

  	let link = `${this.apiConfig.host}/${this.sa}/entry/deactivate`;

  	return this.http.put<User>(link , user)

  		.pipe(

  				tap((value) => console.log(value)) ,

          map((entry : User) => { return {'updated' : true , '$data' : entry}; }) ,

  				catchError(this.handleError<User>(`${this.systemType} Entry` , null))
  			)

  }


  public reactivateProfile() : Observable<User> {

  	let link = `${this.apiConfig.host}/${this.sa}/entry/reactivate`;

  	return this.http.get<User>(link)

  		.pipe(

  				tap((value) => console.log(value)) ,

  				catchError(this.handleError<User>(`${this.systemType} Entry` , null))
  			)

  }

  public $reactivateProfile(user : User) : Observable<General> {

  	let link = `${this.apiConfig.host}/${this.sa}/entry/reactivate`;

  	return this.http.put<User>(link , user)

  		.pipe(

  				tap((value) => console.log(value)) ,

          map((entry : User) => { return {'updated' : true , '$data' : entry}; }) ,

  				catchError(this.handleError<User>(`${this.systemType} Entry` , null))
  			)

  }

  public $updateDisplay(user : User) : Observable<General> {

  	let link = `${this.apiConfig.host}/${this.sa}/entry/change-signature-picture`;

  	return this.http.put<User>(link , user)

  		.pipe(

  				tap((value) => console.log(value)) ,

          map((entry : User) => { return {'updated' : true , '$data' : entry}; }) ,

  				catchError(this.handleError<User>(`${this.systemType} Entry` , null))
  			)

  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

            		return of(result as T);

      }
  }
}
