import { Injectable , ErrorHandler } from '@angular/core';

import { HttpRequest , HttpErrorResponse , HttpEvent , HttpHandler , HttpInterceptor } from '@angular/common/http';

import { of , Observable , throwError , EMPTY } from 'rxjs';

import { catchError , tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';

import { ErrorMessagesService } from '../shared/services/error-messages.service';

@Injectable()

export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private errorHandlerService : ErrorHandlerService , private errMsgService : ErrorMessagesService) { 

  }

  intercept(req : HttpRequest<any> , next : HttpHandler) : Observable<HttpEvent<any>> {

    console.log(req);

  	return next.handle(req)

  		.pipe(

  			tap((val : HttpEvent<any>) => { 

          console.log(val); }) ,

  			catchError((error : HttpErrorResponse) => {

          if (error.error instanceof ErrorEvent) {}

           this.errMsgService.message = error;

              return EMPTY;
        })

  			)
  }

}
