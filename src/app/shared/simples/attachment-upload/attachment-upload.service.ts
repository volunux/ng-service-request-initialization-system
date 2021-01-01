import { Injectable , Inject } from '@angular/core';

import { HttpClient , HttpRequest , HttpHeaders , HttpErrorResponse } from '@angular/common/http';

import { Observable , of , TimeoutError } from 'rxjs';

import { delay , map , tap , timeout , retry , take , catchError } from 'rxjs/operators';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { Api_Token , Api } from '../../../configuration';


@Injectable() 

export class AttachmentUploadService {

	constructor(@Inject(Api_Token) private apiConfig : Api , private http : HttpClient , private ems : ErrorMessagesService) {


	}

	public uploadAttachment(signedUrl , file) : Observable<any> {

			let httpOptions = {'reportProgress' : true , 'observe' : 'events' as const };

			return this.http.post<any>(signedUrl.data.url , file , httpOptions)

				.pipe(

					timeout(80000) ,

					catchError(this.handleError1<any>('Attachment Entry' , null))	)
	}
	
	public removeAttachment(idx : string) : Observable<any> {

		let link = `${this.apiConfig.host}/o/photo/${idx}`;

		return this.http.delete<any>(link)

			.pipe(

				map((val) => {	return {'isDeleted' : true}	}) ,

				catchError(this.handleError<any>('Delete Attachment' , null))

				)
	}

	public addAttachment($file) : Observable<any> {

		let link = `${this.apiConfig.host}/upload`;

		let $body = { 'Key' : $file.key };

		let httpOptions = {'headers' : new HttpHeaders({'Content-Type' : 'application/json;charset=UTF-8'})};

		return this.http.post<any>(link , $body , httpOptions)

			.pipe(

					retry(2) ,

					take(1) ,

					catchError(this.handleError<any>('Attachment Entry' , null))
				)

	}


	public signFile(file) : Observable<any> {

		let link = `${this.apiConfig.host}/o/sign/photo/${file.name}/`;

		let httpOptions = {'headers' : new HttpHeaders({'Content-Type' : 'application/json;charset=UTF-8'}) , 'observe' : 'body' as const };

		let fileInfo = {'filename' : file.name , 'contentType' : file.type}

		return this.http.post(link , fileInfo , httpOptions)

				.pipe(

					catchError(this.handleError<any>('Attachment Upload' , null))

					)

	}

	public signFile2(data) : void {

		let link = '/api/o/sign/photo/' + data.photo.name + '/';

		let httpOptions = {'headers' : new HttpHeaders({'Content-Type' : 'application/json'}) };  

		let http = new HttpRequest('POST' , link , data.photo , httpOptions);

			this.http.post<any>(link , data.photo , httpOptions)

				.pipe(


					tap((response) => {

							console.log(response);
					})

					)

	}


  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

            		return of(result as T);

      }
  }

  private handleError1<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse | TimeoutError) : Observable<any> => { this.ems.message = error;

      	if (error instanceof Object && error.name && error.name == "TimeoutError") {

      		return of(408);	}

      		return of(result as T);

      }
  }


}