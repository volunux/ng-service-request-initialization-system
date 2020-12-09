import { Injectable , Inject } from '@angular/core';

import { Api_Token , Api  } from '../../../configuration';

import { HttpClient , HttpParams , HttpErrorResponse } from '@angular/common/http';

import { Observable , of } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { ErrorMessagesService } from '../../../general/error-messages.service';

import { SearchQuery } from '../../../general/search-query';

@Injectable({

  'providedIn' : 'root'

})

export class SearchQueryService {

  constructor(@Inject(Api_Token) private apiConfig : Api , private http : HttpClient , private ems : ErrorMessagesService) { 

  }

  public searchTerms<T>(sq : SearchQuery , st : string , resource : string , result : T) : Observable<any> {

  	let link = `${this.apiConfig.host}/admin/user/${st}/entries` , httpOptions = { 'params' : new HttpParams({'fromObject' : {...sq}})  };

  	return this.http.get<any>(link , httpOptions).pipe(

      catchError((error : HttpErrorResponse) : Observable<any> | Promise<any> => { this.ems.message = error;

          return of(result as T);
      })

  		)
  }

}
