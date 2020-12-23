import { Injectable } from '@angular/core';
import { CanActivate , CanActivateChild , CanLoad , ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable({

  'providedIn' : 'root'

})

export class IsAdminGuard implements CanActivate {
	
	constructor(private as : AuthenticationService , private router : Router) {


	}

  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.verifyMemberPrivilege();
  }

  public verifyMemberPrivilege() : boolean | UrlTree {

  	let role = this.as.userMinorDetails.role;

  	let allowedMembers = ['moderator' , 'administrator' , 'superAdministrator'];

  	if (allowedMembers.indexOf(role) < 0) { this.router.navigate(['unauthorized']);

  		return false;	}

  	else { return true; }

  }

  canActivateChild(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.canActivate(route , state);
  }

  canLoad() : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.verifyMemberPrivilege();

  }
  
}
