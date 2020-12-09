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

  public searchTerms<T>(sq : SearchQuery , st : string , resource : string , result : T) : Observable<General> {

  	let link = `${this.apiConfig.host}/${st}/entries`;

  	let httpOptions = { 'params' : new HttpParams({'fromObject' : {...sq}})  };

  	return this.http.get<General>(link , httpOptions).pipe(

      catchError((error : HttpErrorResponse) : Observable<any> => { this.ems.message = error;

          return of(result as T);
      })

  		);
  }

}
