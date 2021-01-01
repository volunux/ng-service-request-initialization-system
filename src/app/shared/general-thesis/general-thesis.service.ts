import { Injectable , Inject } from '@angular/core';

import { Observable , of } from 'rxjs';

import { catchError , delay , map , tap } from 'rxjs/operators';

import { HttpClient , HttpErrorResponse } from '@angular/common/http';

import { GeneralThesis } from './general-thesis';

import { General } from '../interfaces/general';

import { SearchQuery } from '../interfaces/search-query';

import { Api_Token , Api } from '../../configuration';

import { ErrorMessagesService } from '../services/error-messages.service';

@Injectable()

export class GeneralThesisService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string;

  public $sa : string; 

  public getAllEntry(params : SearchQuery) : Observable<GeneralThesis[]> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entries`;

    let httpOptions = {'params' : params};

    return this.http.get<GeneralThesis[]>(link , httpOptions)

      .pipe(
              tap((value : GeneralThesis[]) => console.log(value)) ,

              catchError(this.handleError<GeneralThesis[]>(`${this.$systemType} Entries` , []))
        )

  }

  public getEntry(entry : string) : Observable<GeneralThesis> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}`;

  	return this.http.get<GeneralThesis>(link)
       
       .pipe(

          tap((entry : GeneralThesis) => console.log(entry)) ,

          catchError(this.handleError<GeneralThesis>(`${this.$systemType} Entry` , null))
        )
  }
 
  public addEntry() : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/add`;

    return this.http.get<General>(link)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((permitted : General) => { return { 'permitted' : true , '$data' : permitted }; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public $addEntry(request : GeneralThesis) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/create`;

    return this.http.post<GeneralThesis>(link , request)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : GeneralThesis) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<GeneralThesis>(`${this.$systemType} Entry` , null))
        )
  }

  public addComment(entry : string) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/comment`;

    return this.http.get<GeneralThesis>(link)

      .pipe(

        tap((entry : GeneralThesis) => console.log(entry)) ,

        map((entry : GeneralThesis) => { return {'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralThesis>(`${this.$systemType} Comment Entry` , null))

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

        catchError(this.handleError<GeneralThesis>(`${this.$systemType} Reply Entry` , null))

        );
  }

  public $addReply(entry : string , comment : string , reply : General) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/comment/${comment}/reply`;

    return this.http.post<GeneralThesis>(link , reply)

      .pipe(

        tap((value) => {console.log(value)}),

        map((entry : General) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralThesis>(`${this.$systemType} Reply Entry` , null))

        );
  }

  public getTimeline(entry : string) : Observable<GeneralThesis> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/timeline`;

    return this.http.get<GeneralThesis>(link)

      .pipe(

              tap((value : GeneralThesis[]) => console.log(value)) ,

              map((entry : GeneralThesis) => { return entry }) ,

              catchError(this.handleError<GeneralThesis>(`${this.$systemType} Entry Timeline` , null))
        )
  }

  public $updateEntry(entry : string , request : GeneralThesis) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}`;

  return this.http.put<GeneralThesis>(link , request)

      .pipe(

        map((entry : GeneralThesis) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralThesis>(`${this.$systemType} Entry` , null))

        );
  }

  public $confirmEntryOnReview(entry : string) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/review`;

    return this.http.put<GeneralThesis>(link , {entry})

      .pipe(

        delay(5000) ,

        map((entry : GeneralThesis) => { return { 'onReview' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralThesis>(`${this.$systemType} Entry` , null))

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

  public $transferEntry(entry : string , request : GeneralThesis) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/transfer`;

    return this.http.put<GeneralThesis>(link , request)

      .pipe(

        tap((value : GeneralThesis) => console.log(value)) ,

        map((entry : GeneralThesis) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralThesis>(`${this.$systemType} Entry` , null))

        );
  }

  public $deleteManyEntry(arrayIdx : number[]) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/many/delete`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<GeneralThesis[]>(`${this.$systemType} Entries Delete` , []))

        );
  }

  public deleteAllEntry() : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.get(link)

      .pipe(

        catchError(this.handleError<GeneralThesis[]>(`${this.$systemType} Entry or Entries Delete` , []))

        );
  }

  public $deleteAllGeneralThesis() : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.delete(link)

      .pipe(

        map((val) => { return {'allDeleted' : true}; }) ,

        catchError(this.handleError<GeneralThesis[]>(`${this.$systemType} Entry or Entries Delete` , []))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }

}
