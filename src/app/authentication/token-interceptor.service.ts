import { Injectable } from '@angular/core';

import { HttpRequest , HttpHandler , HttpResponse , HttpInterceptor } from '@angular/common/http';

import { AuthenticationService } from './authentication.service';

@Injectable()

export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService : AuthenticationService) { 

  }

  intercept(req : HttpRequest<any> , next : HttpHandler) {

  	if (req.url.startsWith('https://s3.')) { return next.handle(req); }
  	
  	else { let secureReq = req.clone({ 'setHeaders' : {'Authorization' : `Bearer ${this.getToken}` } });

  			return next.handle(secureReq);	}
  }

  get getToken() : string {

  	return this.authService.getToken();
  }

}
