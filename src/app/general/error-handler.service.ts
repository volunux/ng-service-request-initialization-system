import { Injectable , ErrorHandler } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

import { throwError , Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'

})

export class ErrorHandlerService implements ErrorHandler {

  constructor() { 

  }

  handleError(error : any) : void {

    console.log('Here I am');
  }

/*  public handleError<T>(operation = 'operation' , result? : T) {

    console.log('Hey Hey Hey');

  return (error : HttpErrorResponse) : Observable<T> => { let errArr = [];

    console.log('Hello Hello Hello');

    if (error) {

      if (error.error.message) { let compiledError = Object.assign({'resource' : operation } , errArr); 

              return throwError(compiledError);}

      else if (error.error && !error.error.message) {

       for (let prop in error.error) { errArr.push(error.error[prop]); }  

          let compiledError = Object.assign({'resource' : operation } , {'errors' : errArr} , error);  

              return throwError(compiledError);	}

      else { let compiledError = Object.assign({'resource' : operation } , error); 

              return throwError(compiledError);	}
  		}  }
  }*/

}
