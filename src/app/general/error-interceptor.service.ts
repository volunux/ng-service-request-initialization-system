import { Injectable , ErrorHandler } from '@angular/core';

import { HttpRequest , HttpErrorResponse , HttpEvent , HttpHandler , HttpInterceptor } from '@angular/common/http';

import { of , Observable , throwError } from 'rxjs';

import { catchError , tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';

@Injectable()

export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private errorHandlerService : ErrorHandlerService) { 

  }

  intercept(req : HttpRequest<any> , next : HttpHandler) : Observable<HttpEvent<any>> {

  	return next.handle(req)

  		.pipe(

  			tap((val) => { console.log(val); }) ,

  			catchError((error : HttpErrorResponse) => {

          if (error.error instanceof ErrorEvent) {}

          console.log(error);

              let compiledError = Object.assign({'resource' : 'Default Operation' } , error); 

              return throwError(compiledError);
        })

  			)
  }

}
