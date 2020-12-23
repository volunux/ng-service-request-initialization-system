import { Injectable } from '@angular/core';
import { CanActivate , CanActivateChild , ActivatedRouteSnapshot , Router , RouterStateSnapshot , UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable({

  'providedIn': 'root'

})

export class EntryDeleteAllGuard implements CanActivate , CanActivateChild {

  constructor(private as : AuthenticationService , private router : Router) { 

  }

  public canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot ) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  	return this.isSuperAdministrator();

  }

  public isSuperAdministrator() : boolean | UrlTree {

  	if (this.as.isSuperAdministrator) { return true; }

      else { return this.router.parseUrl('/unauthorized');   }

  }

  public canActivateChild(route : ActivatedRouteSnapshot , state : RouterStateSnapshot ) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  	return this.isSuperAdministrator();

  }
}
