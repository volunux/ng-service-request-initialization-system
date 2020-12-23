import { Injectable , Inject } from '@angular/core';

import { HttpClient , HttpErrorResponse , HttpParams } from '@angular/common/http';

import { General } from './general';

import { Statistics } from './statistics';

import { Observable , of } from 'rxjs';

import { delay , map , catchError , tap } from 'rxjs/operators';

import { Api_Token , Api } from '../../configuration';

import { SearchQuery } from '../../shared/interfaces/search-query';

import { ErrorMessagesService } from '../../shared/services/error-messages.service';

@Injectable()

export class StatisticsService {

	constructor(@Inject(Api_Token) private apiConfig : Api , private http : HttpClient , private ems : ErrorMessagesService) { 

	}

  public $systemType : string;

  public $sa : string;

	public getAllEntry(sType : string) : Observable<any> {

		let link : string = `${this.apiConfig.host}/${this.$sa}/entries/${sType}`;

		return this.http.get<Statistics[]>(link)

			.pipe(
							tap((value) => console.log(value)) ,

							catchError(this.handleError<Statistics[]>(`${this.$systemType} Entries` , []))
				)
		}

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

            		return of(result as T);

      }
  }
		
}
