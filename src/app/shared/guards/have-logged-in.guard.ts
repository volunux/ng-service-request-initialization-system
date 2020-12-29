import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot , CanActivate , CanActivateChild , CanLoad , Route , RouterStateSnapshot , UrlTree , Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';

import { Observable } from 'rxjs';

@Injectable({

  'providedIn' : 'root'

})

export class HaveLoggedInGuard implements CanActivate {

	constructor(private as : AuthenticationService , private router : Router) {


	}
  
  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  	const url : string = state.url;

    return this.verifyLogin(url);
  }

  public verifyLogin(url : string) : boolean | UrlTree {

  		if (this.as.isLoggedIn()) { return this.router.parseUrl('account/profile'); }

  		else { return true;  }

  }

  
}
