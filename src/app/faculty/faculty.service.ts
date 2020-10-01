import { Injectable , Inject } from '@angular/core';

import { HttpClient , HttpErrorResponse , HttpHeaders , HttpParams } from '@angular/common/http';

import { Faculty } from './faculty';

import { FACULTIES } from './mock-faculties';

import { AuthenticationService } from '../authentication/authentication.service';

import { BROWSER_STORAGE } from '../authentication/storage';

import { Observable , of , throwError } from 'rxjs';

import { delay , map , tap , catchError } from 'rxjs/operators';

import { Api_Token , Api } from '../configuration';

@Injectable({
	
	providedIn: 'root'

})

export class FacultyService {

	constructor(@Inject(Api_Token) private apiConfig : Api , @Inject(BROWSER_STORAGE) private storage : Storage , private http : HttpClient , private authService : AuthenticationService) { 

	}

	public getFaculties(params : {[key : string] : string }) : Observable<any> {

		let link : string = `${this.apiConfig.host}/faculty/entries`; 

		let httpOptions = {'params' : params};

		return this.http.get<Array<Faculty>>(link , httpOptions)

			.pipe(
							tap((faculties : Faculty[]) => { console.log(faculties); }) ,

							catchError(this.handleError<any>('Faculty Entries' , []))
				)
		}

	public createFaculty(faculty : Faculty) {

		let link : string = `${this.apiConfig.host}/faculty/`; 

		let userToken = this.authService.getToken();

		let httpOptions = {'headers' : new HttpHeaders( {'Authorization' : `Bearer ${userToken}` } ) };

		return this.http.post<Faculty>(link , faculty , httpOptions)

			.pipe(
							tap((faculty : Faculty) => { console.log(faculty); }) ,

							map((faculty : Faculty) => { return {'created' : true , 'faculty' : faculty}; }) ,

							catchError(this.handleError<any>('Faculty Entry' , []))
				)

	}

	public getFaculty(id) : Observable<Faculty> {

		let userToken = this.authService.getToken();

		let httpOptions = {'headers' : new HttpHeaders( {'Authorization' : `Bearer ${userToken}` } ) };

		let link : string = `${this.apiConfig.host}/faculty/entry/${id}/detail/`;

		return this.http.get<Faculty>(link , httpOptions)

			.pipe(	

				tap((faculty) => { console.log(faculty); }) ,

				catchError(this.handleError<any>('Faculty Entry'))

				);
	}

	public authenticate() {

		let httpOptions = {'headers' : new HttpHeaders({'Auhorization' : `Bearer ${this.storage.getItem('rsis-token')}`}) };

		this.http.get(this.apiConfig.host , httpOptions);
	}

	public updateFaculty(id) {

		let userToken = this.authService.getToken();

		let httpOptions = {'headers' : new HttpHeaders( {'Authorization' : `Bearer ${userToken}` } ) };

		let link : string = `${this.apiConfig.host}/faculty/entry/${id}/update/`;

		return this.http.get<Faculty>(link , httpOptions)

			.pipe(	

				tap((faculty) => { console.log(faculty); }) ,

				catchError(this.handleError<any>('Faculty Entry'))

				);
	}

	public deleteFaculty(id) {

		let userToken = this.authService.getToken();

		let httpOptions = {'headers' : new HttpHeaders( {'Authorization' : `Bearer ${userToken}` } ) };

		let link : string = `${this.apiConfig.host}/faculty/entry/${id}/delete/`;

		return this.http.get<Faculty>(link , httpOptions)

			.pipe(	

				tap((faculty) => { console.log(faculty); }) ,

				catchError(this.handleError<any>('Faculty Entry' , []))

				);
	}

	public $updateFaculty(idx : number , faculty : Faculty) : Observable<any> {

		let userToken = this.authService.getToken();

		let httpOptions = {'headers' : new HttpHeaders( {'Authorization' : `Bearer ${userToken}` } ) };

		let link : string = `${this.apiConfig.host}/faculty/entry/${idx}/update/`;

		return this.http.put<Faculty>(link , faculty , httpOptions)

			.pipe(

				tap((faculty) => { console.log(faculty); }) ,

				map((faculty : Faculty) => { return {'updated' : true , 'faculty' : faculty}; })

				);
	}

	public $deleteFaculty(idx : number) : Observable<any> {

		let link : string = `${this.apiConfig.host}/faculty/entry/${idx}/delete/`;

		return this.http.delete<{'message' : string}>(link , {'observe' : 'body' , 'responseType' : 'json'} )

			.pipe(

				tap((faculty) => { console.log('Entry successfully removed and deleted from the record.'); }) ,

				map((data) => { return {'deleted' : true }; })

				);
	}

	public $deleteManyFaculty(arrayIdx : number[]) : Observable<any> {

		let link : string = `${this.apiConfig.host}/faculty/entry/delete/many/`;

		let body = {'items' : arrayIdx};

		return this.http.patch(link , body)

			.pipe(

				map((val) => { return {'manyDeleted' : true}; }) ,

				catchError(this.handleError<any>('Faculty Entry or Entries Delete'))

				);
	}

	public $deleteAllFaculty() : Observable<any> {

		let link : string = `${this.apiConfig.host}/faculty/delete/entry/all/'`;

		return this.http.delete(link)

			.pipe(

				map((val) => { return {'allDeleted' : true}; }) ,

				catchError(this.handleError<any>('Faculty Entry or Entries Delete'))

				);
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
