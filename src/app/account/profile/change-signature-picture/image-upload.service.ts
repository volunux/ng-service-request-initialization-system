import { Injectable , Inject } from '@angular/core';

import { HttpClient , HttpRequest , HttpHeaders , HttpParams , HttpResponse , HttpErrorResponse , HttpEvent , HttpEventType , HttpProgressEvent } from '@angular/common/http';

import { Observable , of } from 'rxjs';

import { delay , map , tap , timeout , retry , take , catchError } from 'rxjs/operators';

import { ErrorMessagesService } from '../../../general/error-messages.service';

import { Api_Token , Api } from '../../../configuration';


@Injectable({

	'providedIn' : 'root'	
}) 

export class ImageUploadService {

	constructor(@Inject(Api_Token) private apiConfig : Api , private http : HttpClient , private ems : ErrorMessagesService) {


	}

	public uploadImage(signedUrl , file) : Observable<any> {

			let httpOptions = {/*'headers' : new HttpHeaders({'Content-Type' : 'application/json;charset=UTF-8'}) , */'reportProgress' : true , 'observe' : 'events' as const };

			return this.http.post<any>(signedUrl.data.url , file , httpOptions)

				.pipe(

					tap((val) => {


					}),

					catchError(this.handleError<any>('Image Entry' , null))

/*							map((event) => this.getEventMessage(event , file)) ,*/
					)
	}

private getEventMessage(event: HttpEvent<any>, file: File) {
  switch (event.type) {
    case HttpEventType.Sent:
      return `Uploading file "${file.name}" of size ${file.size}.`;

    case HttpEventType.UploadProgress:
      // Compute and show the % done:
      const percentDone = Math.round(100 * event.loaded / event.total);
      return `File "${file.name}" is ${percentDone}% uploaded.`;

    case HttpEventType.Response:
      return `File "${file.name}" was completely uploaded!`;

    default:
      return `File "${file.name}" surprising upload event: ${event.type}.`;
  }
}
	
	public removeImage(idx : string) : Observable<any> {

		let link = `${this.apiConfig.host}/o/photo/${idx}`;

		return this.http.delete<any>(link)

			.pipe(

				map((val) => {

						return {'isDeleted' : true}	
				
				}) ,

				catchError(this.handleError<any>('Delete Image' , null))

				)
	}

	public addImage($file) : Observable<any> {

		let link = `${this.apiConfig.host}/upload`;

		let $body = { 'Key' : $file.key };

		let httpOptions = {'headers' : new HttpHeaders({'Content-Type' : 'application/json;charset=UTF-8'})};

		return this.http.post<any>(link , $body , httpOptions)

			.pipe(

					retry(2) ,

					take(1) ,

					catchError(this.handleError<any>('Image Entry' , null))
				)

	}


	public signFile(file) : Observable<any> {

		console.log(file);

		let link = `${this.apiConfig.host}/o/sign/photo/${file.name}/`;

		let httpOptions = {'headers' : new HttpHeaders({'Content-Type' : 'application/json;charset=UTF-8'}) , 'observe' : 'body' as const };

		let fileInfo = {'filename' : file.name , 'contentType' : file.type}

		return this.http.post(link , fileInfo , httpOptions)

				.pipe(

					tap((response) => {

						console.log(999);

							console.log(response);

							console.log(888);
					}) ,

					catchError(this.handleError<any>('Image Upload' , null))

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


}