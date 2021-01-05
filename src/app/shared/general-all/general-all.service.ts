import { Injectable , Inject } from '@angular/core';

import { Observable , of } from 'rxjs';

import { catchError , delay , map , tap } from 'rxjs/operators';

import { HttpClient , HttpErrorResponse } from '@angular/common/http';

import { General } from '../interfaces/general';

import { GeneralAll } from './general-all';

import { SearchQuery } from '../interfaces/search-query';

import { Api_Token , Api } from '../../configuration';

import { ErrorMessagesService } from '../services/error-messages.service';

@Injectable()

export class GeneralAllService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService) { 

  }

  public $systemType : string;

  public $sa : string;

  public deleteAllEntry() : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.get(link)

      .pipe(

        catchError(this.handleError<GeneralAll[]>(`${this.$systemType} Entry or Entries Delete` , []))

        );
  }

  public $deleteAllEntry() : Observable<General> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.delete(link)

      .pipe(

        map((val) => { return {'allDeleted' : true}; }) ,

        catchError(this.handleError<GeneralAll[]>(`${this.$systemType} Entry or Entries Delete` , []))

        );
  }



  public deleteManyEntry(this$) : void | boolean { let confirmDeletion = confirm('Are you sure you want to perform this action?');

      if (confirmDeletion) {

        if (this$.p$esdl) return false;

        this$.p$esdl = true;

        this$.grs.$deleteManyEntry(this$.esdl)

        .subscribe((val : General) => {

          this$.p$esdl = false;

          this$.entries = this$.entries.filter((entry) => {

          this$.ns.setNotificationStatus(true);

          this$.ns.addNotification(`Operation is successful and many ${this$.systemType} Entry is deleted.`); 

           return this$.esdl.indexOf(entry.num) < 0;  });

          this$.esdl = [];  } ,

            (error : General) => { 

          this$.p$esdl = false;

          this$.ns.setNotificationStatus(true);

          this$.ns.addNotification(`Operation is unsuccessful and many ${this$.systemType} Entry is not deleted.`);   } )  }

          else {  return false;  }
  }



  public addEntryToDeleteList(gridx : number , checked : boolean , idx : number , this$) : void {

  if (checked) { if (gridx) this$.esdl.push(gridx);  }

  else if (!checked && this$.esdl.indexOf(gridx) > -1) {

    this$.esdl = this$.esdl.filter((id) => { let finalId = id != gridx;

      if (finalId) return '' + finalId;

      return false;  });  }   }



   public paramProcessor(params , this$) {

       let whichPage = params.get('page') , whichRef = params.get('name');

       this$.$entryRef = whichRef ? true : 0;

       this$.pageNumber = +whichPage ? +whichPage : 1;

      let paramsRegister = params , paramKeys = paramsRegister.keys , paramsObject = {};

      for (let key of paramKeys) { let param = paramsRegister.get(key);

        if (param) paramsObject[key] = param; }

      if (Object.keys(this$.grss.searchQuery).length) paramsObject = {...paramsObject , ...this$.grss.searchQuery };

      return paramsObject; 

   }


  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }
}
