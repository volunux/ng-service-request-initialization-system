import { Injectable , Inject } from '@angular/core';

import { Observable , of } from 'rxjs';

import { catchError , delay , map , tap } from 'rxjs/operators';

import { HttpClient , HttpErrorResponse } from '@angular/common/http';

import { General } from '../interfaces/general';

import { GeneralInternal } from './general-internal';

import { SearchQuery } from '../interfaces/search-query';

import { Api_Token , Api } from '../../configuration';

import { ErrorMessagesService } from '../services/error-messages.service';

@Injectable()

export class GeneralInternalService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string;

  public $sa : string; 

  public getAllEntry(params : SearchQuery) : Observable<GeneralInternal[]> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entries`;

    let httpOptions = {'params' : params};

    return this.http.get<GeneralInternal[]>(link , httpOptions)

      .pipe(
              tap((value : GeneralInternal[]) => console.log(value)) ,

              catchError(this.handleError<GeneralInternal[]>(`${this.$systemType} Entries` , []))
        )

  }

  public getEntry(entry : number) : Observable<GeneralInternal> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/detail`;

  	return this.http.get<GeneralInternal>(link)
       
       .pipe(

          tap((entry : GeneralInternal) => console.log(entry)) ,

          catchError(this.handleError<GeneralInternal>(`${this.$systemType} Entry` , null))
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

  public $addEntry(internal : GeneralInternal) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/create`;

    internal._id = internal.name;

    return this.http.post<GeneralInternal>(link , internal)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : GeneralInternal) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<GeneralInternal>(`${this.$systemType} Entry` , null))
        )
  }

  public updateEntry(id : number) : Observable<GeneralInternal> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${id}/update/`;

    return this.http.get<GeneralInternal>(link)

      .pipe(

         map((entry : General) => { return { 'permitted' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralInternal>(`${this.$systemType} Entry` , null))

        );
  }

  public $updateEntry(entry : number , internal : GeneralInternal) : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update`;

  return this.http.put<GeneralInternal>(link , internal)

      .pipe(

        map((entry : GeneralInternal) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<GeneralInternal>(`${this.$systemType} Entry` , null))

        );
  }

  public deleteEntry(id : number) : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${id}/delete/`;

    return this.http.get<GeneralInternal>(link)

      .pipe(  

        catchError(this.handleError<GeneralInternal>(`${this.$systemType} Entry` , null))

        );
  }

  public $deleteEntry(idx : number) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/${idx}/delete/`;

    return this.http.delete<{'message' : string}>(link)

      .pipe(

        map((data) => { return {'deleted' : true }; }) ,

        catchError(this.handleError<GeneralInternal>(`${this.$systemType} Entry` , null))

        );
  }

  public $deleteManyEntry(arrayIdx : number[]) : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/many/delete`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<GeneralInternal[]>(`${this.$systemType} Entries Delete` , []))

        );
  }

  public $deleteAllGeneralInternal() : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.delete(link)

      .pipe(

        map((val) => { return {'allDeleted' : true}; }) ,

        catchError(this.handleError<GeneralInternal[]>(`${this.$systemType} Entry or Entries Delete` , []))

        );
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }


}
