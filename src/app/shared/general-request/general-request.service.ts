import { Injectable , Inject } from '@angular/core';

import { Observable , of } from 'rxjs';

import { catchError , delay , map , tap } from 'rxjs/operators';

import { HttpClient , HttpErrorResponse } from '@angular/common/http';

import { GeneralRequest } from './request';

import { General } from '../interfaces/general';

import { SearchQuery } from '../interfaces/search-query';

import { Api_Token , Api } from '../../configuration';

import { ErrorMessagesService } from '../services/error-messages.service';

@Injectable()

export class GeneralRequestService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string;

  public $sa : string; 

  public getAllEntry(params : SearchQuery) : Observable<GeneralRequest[]> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entries`;

    let httpOptions = {'params' : params};

    return this.http.get<GeneralRequest[]>(link , httpOptions)

      .pipe(
              tap((value : GeneralRequest[]) => console.log(value)) ,

              catchError(this.handleError<GeneralRequest[]>(`${this.$systemType} Entries` , []))
        )

  }

  public getEntry(entry : string) : Observable<GeneralRequest> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}`;

  	return this.http.get<GeneralRequest>(link)
       
       .pipe(

          tap((entry : GeneralRequest) => console.log(entry)) ,

          catchError(this.handleError<GeneralRequest>(`${this.$systemType} Entry` , null))
        )
  }
 
  public addEntry() : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/add`;

    return this.http.get<General>(link)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((permitted : General) => { return { 'permitted' : true }; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public $addEntry(request : GeneralRequest) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/create`;

    return this.http.post<GeneralRequest>(link , request)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : GeneralRequest) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<GeneralRequest>(`${this.$systemType} Entry` , null))
        )
  }

  public addComment(entry : string) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/comment`;

    return this.http.get<GeneralRequest>(link)

      .pipe(

        tap((entry : GeneralRequest) => console.log(entry)) ,

        map((entry : GeneralRequest) => { return {'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralRequest>(`${this.$systemType} Comment Entry` , null))

        );
  }

  public $addComment(entry : string , comment : General) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/comment`;

    return this.http.post<General>(link , comment)

      .pipe(

        tap((entry : General) => console.log(entry)) ,

        map((entry : General) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<General>(`${this.$systemType} Comment Entry` , null))

        );
  }

  public addReply(entry : string , comment : string) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/comment/${comment}/reply`;

    return this.http.get<General>(link)

      .pipe(

        tap((value) => {console.log(value)}),

        map((entry : General) => { return {'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralRequest>(`${this.$systemType} Reply Entry` , null))

        );
  }

  public $addReply(entry : string , comment : string , reply : General) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/comment/${comment}/reply`;

    return this.http.post<GeneralRequest>(link , reply)

      .pipe(

        tap((value) => {console.log(value)}),

        map((entry : General) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralRequest>(`${this.$systemType} Reply Entry` , null))

        );
  }

  public getTimeline(entry : string) : Observable<GeneralRequest> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/timeline`;

    return this.http.get<GeneralRequest>(link)

      .pipe(

              tap((value : GeneralRequest[]) => console.log(value)) ,

              map((entry : GeneralRequest) => { return entry }) ,

              catchError(this.handleError<GeneralRequest>(`${this.$systemType} Entry Timeline` , null))
        )
  }

  public $updateEntry(entry : string , request : GeneralRequest) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}`;

  return this.http.put<GeneralRequest>(link , request)

      .pipe(

        map((entry : GeneralRequest) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralRequest>(`${this.$systemType} Entry` , null))

        );
  }

  public $confirmEntryOnReview(entry : string) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/review`;

    return this.http.put<GeneralRequest>(link , {entry})

      .pipe(

        delay(5000) ,

        map((entry : GeneralRequest) => { return { 'onReview' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralRequest>(`${this.$systemType} Entry` , null))

        );
  }

  public transferEntry(entry : string) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/transfer`;

    return this.http.get<General>(link)

      .pipe(

        tap((value : General) => console.log(value)) ,

        map((entry : General) => { return {'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<General>(`${this.$systemType} Entry` , null))

        );
  }

  public $transferEntry(entry : string , request : GeneralRequest) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/transfer`;

    return this.http.put<GeneralRequest>(link , request)

      .pipe(

        tap((value : GeneralRequest) => console.log(value)) ,

        map((entry : GeneralRequest) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralRequest>(`${this.$systemType} Entry` , null))

        );
  }

  public $deleteManyEntry(arrayIdx : number[]) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/many/delete`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<GeneralRequest[]>(`${this.$systemType} Entries Delete` , []))

        );
  }

  public $deleteAllGeneralRequest() : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.delete(link)

      .pipe(

        map((val) => { return {'allDeleted' : true}; }) ,

        catchError(this.handleError<GeneralRequest[]>(`${this.$systemType} Entry or Entries Delete` , []))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }

}
