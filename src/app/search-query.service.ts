import { Injectable , Inject } from '@angular/core';

import { Api_Token , Api  } from './configuration';

import { HttpClient , HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'

})

export class SearchQueryService {

  constructor(@Inject(Api_Token) private apiConfig : Api , private http : HttpClient) { 

  }

  public searchTerms(searchQuery : { [key : string] : string } , searchType : string , resource : string) : Observable<any> {

  	let link = `${this.apiConfig.host}/${searchType}/entries`;

  	let httpOptions = { 'params' : new HttpParams({'fromObject' : {...searchQuery}})  };

  	return this.http.get<any>(link , httpOptions).pipe(

  			tap((val) => console.log(val))

  		)
  }



}
