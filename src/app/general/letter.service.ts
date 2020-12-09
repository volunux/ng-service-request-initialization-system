import { Injectable , Inject } from '@angular/core';

import { Observable , of } from 'rxjs';

import { catchError , delay , map , tap } from 'rxjs/operators';

import { HttpClient , HttpErrorResponse } from '@angular/common/http';

import { SearchQuery } from '../general/search-query';

import { Api_Token , Api } from '../configuration';

import { ErrorMessagesService } from '../general/error-messages.service';

@Injectable({

  'providedIn' : 'root'

})

export class LetterService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public getHash() : Observable<any> {

  	let	link = `http://localhost:3000/api/s3/signature`;

  	return this.http.get<any>(link)
       
       .pipe(

          tap((entry : any) => console.log(entry)) ,

          catchError(this.handleError<any>(`Error Entry` , null))
        )
  }

  public removeImage(key : string) {

  	return this.http.post<any>('http://localhost:3000/form' , {'Key' : key})

       .pipe(

          tap((entry : any) => console.log(entry)) ,

          catchError(this.handleError<any>(`Error Entry` , null))
        )
  }

  public saveImage(key : string) {

  	return this.http.post<any>('http://localhost:3000/api/upload' , {'Key' : key})

       .pipe(

          tap((entry : any) => console.log(entry)) ,

          catchError(this.handleError<any>(`Error Entry` , null))
        )

  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }  

}
