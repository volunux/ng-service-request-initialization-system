import { Injectable , Inject } from '@angular/core';

import { Observable , of } from 'rxjs';

import { catchError , delay , map , tap } from 'rxjs/operators';

import { HttpClient , HttpErrorResponse } from '@angular/common/http';

import { General } from '../interfaces/general';

import { GeneralConversation } from './general-conversation';

import { SearchQuery } from '../interfaces/search-query';

import { Api_Token , Api } from '../../configuration';

import { ErrorMessagesService } from '../services/error-messages.service';

@Injectable()

export class GeneralConversationService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string;

  public $sa : string; 

  public getAllEntry(params : SearchQuery) : Observable<GeneralConversation[]> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entries`;

    let httpOptions = {'params' : params};

    return this.http.get<GeneralConversation[]>(link , httpOptions)

      .pipe(
              tap((value : GeneralConversation[]) => console.log(value)) ,

              catchError(this.handleError<GeneralConversation[]>(`${this.$systemType} Entries` , []))
        )

  }

  public getEntry(entry : string) : Observable<GeneralConversation> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/detail`;

  	return this.http.get<GeneralConversation>(link)
       
       .pipe(

          tap((entry : GeneralConversation) => console.log(entry)) ,

          catchError(this.handleError<GeneralConversation>(`${this.$systemType} Entry` , null))
        )
  }
 


  public updateEntry(id : string) : Observable<GeneralConversation> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${id}/update/`;

    return this.http.get<GeneralConversation>(link)

      .pipe(

         map((entry : General) => { return { 'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralConversation>(`${this.$systemType} Entry` , null))

        );
  }

  public $updateEntry(entry : string , internal : GeneralConversation) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update`;

  return this.http.put<GeneralConversation>(link , internal)

      .pipe(

        map((entry : GeneralConversation) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralConversation>(`${this.$systemType} Entry` , null))

        );
  }

  public deleteEntry(id : string) : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${id}/delete/`;

    return this.http.get<GeneralConversation>(link)

      .pipe(  

        catchError(this.handleError<GeneralConversation>(`${this.$systemType} Entry` , null))

        );
  }

  public $deleteEntry(idx : string) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${idx}/delete/`;

    return this.http.delete<{'message' : string}>(link)

      .pipe(

        map((data) => { return {'deleted' : true }; }) ,

        catchError(this.handleError<GeneralConversation>(`${this.$systemType} Entry` , null))

        );
  }

  public $deleteManyEntry(arrayIdx : number[]) : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/many/delete`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<GeneralConversation[]>(`${this.$systemType} Entries Delete` , []))

        );
  }

  public deleteAllEntry() : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.get(link)

      .pipe(

        catchError(this.handleError<GeneralConversation[]>(`${this.$systemType} Entry or Entries Delete` , []))

        );
  }


  public $deleteAllEntry() : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.delete(link)

      .pipe(

        map((val) => { return {'allDeleted' : true}; }) ,

        catchError(this.handleError<GeneralConversation[]>(`${this.$systemType} Entry or Entries Delete` , []))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }


}
