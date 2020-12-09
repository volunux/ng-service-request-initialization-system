import { Injectable } from '@angular/core';

import { CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot , Router , UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthenticationService } from '../../../../authentication/authentication.service';

@Injectable({

  'providedIn' : 'root'

})

export class UserDeleteAllGuardService implements CanActivate {

  constructor(private authService : AuthenticationService , private router : Router) { 

  }

  public canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot ) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  	return this.isSuperAdministrator();

  }

  public isSuperAdministrator() : boolean | UrlTree {

  	if (this.authService.isSuperAdministrator) { return true; }

  	return this.router.parseUrl('/unauthorized');


  }

}
