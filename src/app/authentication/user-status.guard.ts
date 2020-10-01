import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({

  providedIn: 'root'

})

export class UserStatusGuard implements CanActivate {

	constructor(private authenticationService : AuthenticationService , private router : Router) {

	}

  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return true;
  }

  public verifyMemberStatus() : boolean | UrlTree {

			let status = this.authenticationService.userStatus;

			if (status == 'pending') { this.router.navigate(['unauthorized']);

				return false;	}

				else {	return true;	}
  }
  
}
