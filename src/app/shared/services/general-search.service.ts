import { Injectable , Inject } from '@angular/core';

import { Api_Token , Api  } from '../../configuration';

import { HttpClient , HttpParams , HttpErrorResponse } from '@angular/common/http';

import { Observable , of , Subject } from 'rxjs';

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

  public error : any;

  public searchQuery : { [key : string] : any } = {};

  public refreshing : boolean;


  public searchTerm : Subject<{[key : string] : any }> = new Subject<{[key : string] : any }>();

  public searchTerm$ = this.searchTerm.asObservable();



  public entriesSearched : Subject<{[key : string] : any }> = new Subject<{[key : string] : any }>();

  public entriesSearched$ = this.entriesSearched.asObservable();


  public clearSearch : Subject<boolean> = new Subject<boolean>();

  public clearSearch$ = this.clearSearch.asObservable();


  public searchCleared : Subject<boolean> = new Subject<boolean>();

  public searchCleared$ = this.searchCleared.asObservable();


  public errorExist : Subject<boolean> = new Subject<boolean>();

  public errorExist$ = this.errorExist.asObservable();


  public searchTerms<T>(sq : SearchQuery , st : string , resource : string , result : T) : Observable<General> {

  	let link = `${this.apiConfig.host}/${st}/entries`;

  	let httpOptions = { 'params' : new HttpParams({'fromObject' : {...sq}})  };

  	return this.http.get<General>(link , httpOptions).pipe(

      catchError((error : HttpErrorResponse) : Observable<any> => { this.ems.message = error;

          return of(result as T);
      })

  		);
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }


}
