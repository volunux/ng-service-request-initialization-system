import { Injectable , Inject } from '@angular/core';

import { HttpClient , HttpErrorResponse , HttpParams } from '@angular/common/http';

import { General } from '../general';

import { Upload } from './upload';

import { Observable , of } from 'rxjs';

import { delay , map , catchError } from 'rxjs/operators';

import { Api_Token , Api } from '../../../configuration';

import { SearchQuery } from '../../../shared/interfaces/search-query';

import { ErrorMessagesService } from '../../../shared/services/error-messages.service';


@Injectable()
export class UploadService {

	constructor(@Inject(Api_Token) private apiConfig : Api , private http : HttpClient , private ems : ErrorMessagesService) { 

	}

  public $systemType : string;

  public $sa : string;

	public getAllEntry(params : SearchQuery , link2Confirm? : boolean) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entries`;

		let httpOptions = {'params' : params};

		return this.http.get<Upload[]>(link , httpOptions)

			.pipe(
							catchError(this.handleError<Upload[]>(`${this.$systemType} Entries` , []))
				)
		}

  public $deleteManyEntry(arrayIdx : number[]) : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/many/delete`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<Upload[]>(`${this.$systemType} Entries Delete` , []))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

            		return of(result as T);

      }
  }


}
