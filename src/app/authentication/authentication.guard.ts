import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

import { Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'

})

export class AuthenticationGuard implements CanActivate {

	constructor(private authenticationService : AuthenticationService , private router : Router) {


	}
  
  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  	const url : string = state.url;

    return this.verifyLogin(url);
  }

  public verifyLogin(url : string) : true | UrlTree {

  		if (this.authenticationService.isLoggedIn()) { return true; }

  		else { this.authenticationService.redirectAddress = url;

  			return this.router.parseUrl('/signin');

  		}
  }
  
}
