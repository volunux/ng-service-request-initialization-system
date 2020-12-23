import { Injectable } from '@angular/core';
import { CanActivate , CanActivateChild , CanLoad , ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable({

  'providedIn' : 'root'

})
export class AccountStatusGuard implements CanActivate {

	constructor(private as : AuthenticationService , private router : Router) {

	}

  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return true;
  }

  public verifyMemberStatus() : boolean | UrlTree {

			let status = this.as.userStatus;

			if (status == 'pending') { this.router.navigate(['unauthorized']);

				return false;	}

				else {	return true;	}
  }

  canActivateChild(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.canActivate(route , state);
  }

  canLoad(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) : boolean | UrlTree {

  	return this.verifyMemberStatus();
  }
  
  
}
