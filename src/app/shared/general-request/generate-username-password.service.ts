import { Injectable , Inject } from '@angular/core';

import { Observable , of } from 'rxjs';

import { catchError , delay , map , tap } from 'rxjs/operators';

import { HttpClient , HttpErrorResponse } from '@angular/common/http';

import { GeneralRequest } from './request';

import { General } from './general';

import { SearchQuery } from '../../general/search-query';

import { Api_Token , Api } from '../../configuration';

import { ErrorMessagesService } from '../../shared/services/error-messages.service';

@Injectable()

export class GenerateUsernamePasswordService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $createUsernamePassword(credentials : General) : Observable<General> {

  	let link = `${this.apiConfig.host}/request-credential/create`;

  	let httpOptions = { 'headers' : {'Content-Type' : 'application/json' } };

  	return this.http.post<General>(link , credentials , httpOptions)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : GeneralRequest) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<GeneralRequest>(`Credentials Entry` , null))
        )
  }


  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }


}