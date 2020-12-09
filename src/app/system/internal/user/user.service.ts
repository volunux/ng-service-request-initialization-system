import { Injectable , Inject } from '@angular/core';

import { HttpClient , HttpErrorResponse , HttpParams } from '@angular/common/http';

import { User } from './user';

import { Observable , of } from 'rxjs';

import { delay , map , catchError } from 'rxjs/operators';

import { Api_Token , Api } from '../../../configuration';

import { SearchQuery } from '../../../shared/interfaces/search-query';

import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

@Injectable()

export class UserService {

	constructor(@Inject(Api_Token) private apiConfig : Api , private http : HttpClient , private ems : ErrorMessagesService) { 

	}

  public $systemType : string;

  public $sa : string;

	public getAllEntry(params : SearchQuery) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entries`;

		let httpOptions = {'params' : params};

		return this.http.get<User[]>(link , httpOptions)

			.pipe(
							catchError(this.handleError<User[]>(`${this.$systemType} Entries` , []))
				)
		}


	public getUsers(params : SearchQuery) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entries`;

		let httpOptions = {'params' : params};

		return this.http.get<User[]>(link , httpOptions)

			.pipe(
							catchError(this.handleError<User[]>(`${this.$systemType} Entries` , []))
				)
		}

	public getAcctRequestUsers(params : SearchQuery) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/account-request`;

		let httpOptions = {'params' : params};

		return this.http.get<User[]>(link , httpOptions)

			.pipe(
							catchError(this.handleError<User[]>(`${this.$systemType} Entries` , []))
				)
		}

	public addUser() : Observable<{'User' : string[] }> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/add`; 

		return this.http.get<{'User' : string[]}>(link)

			.pipe(

							catchError(this.handleError<{'User' : string[]}>(`${this.$systemType} Entry` , null))
				)

	}

	public createUser(user : User) {

		let link : string = `${this.apiConfig.host}/${this.$sa}/add`; 

		return this.http.post<User>(link , user)

			.pipe(
							map((user : User) => { return {'created' : true , 'user' : user}; }) ,

							catchError(this.handleError<User>(`${this.$systemType} Entry` , null))
				)

	}

	public getUser(idx : string) : Observable<User> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${idx}/detail`;

		return this.http.get<User>(link)

			.pipe(	

				catchError(this.handleError<User>(`${this.$systemType} Entries` , null))

				);
	}

	public getAcctRequestUser(idx : string) : Observable<User> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/account-request/${idx}/detail/`;

		return this.http.get<User>(link)

			.pipe(	

				catchError(this.handleError<User>('User Entry' , null))

				);
	}

	public updateUser(idx : string) {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${idx}/update/`;

		return this.http.get<User>(link)

			.pipe(	

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public updateAcctRequestUser(idx : string) {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${idx}/update/`;

		return this.http.get<User>(link)

			.pipe(	

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public $updateAcctRequestUser(idx : string , user : User) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/account-request/${idx}/update/`;

		return this.http.put<User>(link , user)

			.pipe(

				map((user : User) => { return {'updated' : true , 'user' : user}; }) ,

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public deleteUser(idx : string) {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${idx}/delete/`;

		return this.http.get<User>(link)

			.pipe(	

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public reactivateUser(idx : string) {

		let link : string = `${this.apiConfig.host}/${this.$sa}/${idx}/reactivate/`;

		return this.http.get<User>(link)

			.pipe(	

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public $reactivateUser(idx : string , user : User) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/${idx}/reactivate/`;

		return this.http.put<User>(link , user)

			.pipe(

				map((user : User) => { return {'updated' : true , 'user' : user}; }) ,

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public deactivateUser(idx : string) {

		let link : string = `${this.apiConfig.host}/${this.$sa}/${idx}/deactivate/`;

		return this.http.get<User>(link)

			.pipe(	

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public $deactivateUser(idx : string , user : User) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/${idx}/deactivate/`;

		return this.http.put<User>(link , user)

			.pipe(

				map((user : User) => { return {'updated' : true , 'user' : user}; }) ,

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public $updateUser(idx : string , user : User) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${idx}/update/`;

		return this.http.put<User>(link , user)

			.pipe(

				map((user : User) => { return {'updated' : true , 'user' : user}; }) ,

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public $deleteUser(idx : string) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${idx}/delete/`;

		return this.http.delete<{'message' : string}>(link)

			.pipe(

				map((data) => { return {'deleted' : true }; }) ,

				catchError(this.handleError<User>(`${this.$systemType} Entry` , null))

				);
	}

	public $deleteManyUser(arrayIdx : number[]) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/delete/many/`;

		let body = {'items' : arrayIdx};

		return this.http.patch(link , body)

			.pipe(

				map((val) => { return {'manyDeleted' : true}; }) ,

				catchError(this.handleError<User[]>(`${this.$systemType} Entry or Entries Delete` , []))

				);
	}

	public $deleteManyEntry(arrayIdx : number[]) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entry/delete/many/`;

		let body = {'items' : arrayIdx};

		return this.http.patch(link , body)

			.pipe(

				map((val) => { return {'manyDeleted' : true}; }) ,

				catchError(this.handleError<User[]>(`${this.$systemType} Entry or Entries Delete` , []))

				);
	}

	public $deleteAllUser() : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

		return this.http.delete(link)

			.pipe(

				map((val) => { return {'allDeleted' : true}; }) ,

				catchError(this.handleError<User[]>(`${this.$systemType} Entry or Entries Delete` , []))

				);
	}

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

            		return of(result as T);

      }
  }


}
