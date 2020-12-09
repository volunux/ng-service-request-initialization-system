import { ErrorHandler } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { Interceptor } from './interceptor';

import { ErrorInterceptorService } from './error-interceptor.service';

import { TokenInterceptorService } from '../authentication/token-interceptor.service';

import { ErrorHandlerService } from './error-handler.service';


export const appInterceptors : Interceptor[] = [

/*	{'provide' : ErrorHandler , 'useClass' : ErrorHandlerService } ,*/

	{'provide' : HTTP_INTERCEPTORS , 'useClass' : TokenInterceptorService , 'multi' : true} ,

/*	{'provide' : HTTP_INTERCEPTORS , 'useClass' : ErrorInterceptorService , 'multi' : true }*/

];