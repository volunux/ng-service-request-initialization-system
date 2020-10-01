import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthenticationService } from '../../../authentication/authentication.service';

@Injectable({

  providedIn: 'root'
})

export class DeleteAllGuard implements CanActivate {

	constructor(private authenticationService : AuthenticationService , private router : Router) {

		}
  
  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.verifySuperAdministrator();
  }

  public verifySuperAdministrator() : boolean | UrlTree {

  	if (this.authenticationService.isSuperAdministrator) return true;

  	this.router.parseUrl('/unauthorized');

  	return false;
  }
  
}
