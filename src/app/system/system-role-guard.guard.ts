import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({

  providedIn: 'root'

})

export class SystemRoleGuard implements CanActivate {

	constructor(private authenticationService : AuthenticationService , private router : Router) {


	}

  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.verifyMemberPrivilege();
  }

  public verifyMemberPrivilege() : boolean | UrlTree {

  	let role = this.authenticationService.userMinorDetails.role;

  	let allowedMembers = ['moderator' , 'administrator' , 'superAdministrator'];

  	if (allowedMembers.indexOf(role) < 0) { this.router.navigate(['unauthorized']);

  		return false;	}

  	else { return true; }

  }
  
}
