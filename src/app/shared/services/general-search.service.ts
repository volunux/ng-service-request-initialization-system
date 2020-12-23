import { Injectable , Inject } from '@angular/core';

import { Api_Token , Api  } from '../../configuration';

import { HttpClient , HttpParams , HttpErrorResponse } from '@angular/common/http';

import { Observable , of } from 'rxjs';

import { map } from 'rxjs/operators';

import { catchError } from 'rxjs/operators';

import { ErrorMessagesService } from './error-messages.service';

import { SearchQuery } from '../interfaces/search-query';

import { General } from '../interfaces/general';

@Injectable()

export class GeneralSearchService {

  constructor(@Inject(Api_Token) private apiConfig : Api , private http : HttpClient , private ems : ErrorMessagesService) { 

  }

  public $systemType : string;

  public $sa : string; 

  public searchTerms<T>(sq : SearchQuery , st : string , resource : string , result : T) : Observable<General> {

  	let link = `${this.apiConfig.host}/${st}/entries`;

  	let httpOptions = { 'params' : new HttpParams({'fromObject' : {...sq}})  };

  	return this.http.get<General>(link , httpOptions).pipe(

      catchError((error : HttpErrorResponse) : Observable<any> => { this.ems.message = error;

          return of(result as T);
      })

  		);
  }

  public deleteAllEntry() : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.get(link)

      .pipe(

        catchError(this.handleError<any[]>(`${this.$systemType} Entry or Entries Delete` , []))

        );
  }

  public $deleteAllPayment() : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.delete(link)

      .pipe(

        map((val) => { return {'allDeleted' : true}; }) ,

        catchError(this.handleError<any[]>(`${this.$systemType} Entry or Entries Delete` , []))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }

}
