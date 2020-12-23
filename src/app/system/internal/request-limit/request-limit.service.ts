import { Injectable , Inject } from '@angular/core';

import { HttpClient , HttpErrorResponse , HttpParams } from '@angular/common/http';

import { RequestLimit } from './request-limit';

import { General } from '../general';

import { Observable , of } from 'rxjs';

import { delay , tap , map , catchError } from 'rxjs/operators';

import { Api_Token , Api } from '../../../configuration';

import { SearchQuery } from '../../../shared/interfaces/search-query';

import { ErrorMessagesService } from '../../../shared/services/error-messages.service';


@Injectable()
export class RequestLimitService {

	constructor(@Inject(Api_Token) private apiConfig : Api , private http : HttpClient , private ems : ErrorMessagesService) { 

	}

  public $systemType : string;

  public $sa : string;

	public getAllEntry(params : SearchQuery , link2Confirm? : boolean) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entries`;

		let httpOptions = {'params' : params};

		return this.http.get<RequestLimit[]>(link , httpOptions)

			.pipe(
							catchError(this.handleError<RequestLimit[]>(`${this.$systemType} Entries` , []))
				)
		}

  public getEntry(entry : string) : Observable<RequestLimit> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/detail`;

    return this.http.get<RequestLimit>(link)
       
       .pipe(

          tap((entry : RequestLimit) => console.log(entry)) ,

          catchError(this.handleError<RequestLimit>(`${this.$systemType} Entry` , null))
        )
  }

  public updateEntry(id : string) : Observable<RequestLimit> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${id}/update/`;

    return this.http.get<RequestLimit>(link)

      .pipe(

         map((entry : General) => { return { 'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<RequestLimit>(`${this.$systemType} Entry` , null))

        );
  }

  public $updateEntry(entry : string , internal : RequestLimit) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update`;

  return this.http.put<RequestLimit>(link , internal)

      .pipe(

        map((entry : RequestLimit) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<RequestLimit>(`${this.$systemType} Entry` , null))

        );
  }

  public $deleteManyEntry(arrayIdx : number[]) : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/many/delete`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<RequestLimit[]>(`${this.$systemType} Entries Delete` , []))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

            		return of(result as T);

      }
  }

}
