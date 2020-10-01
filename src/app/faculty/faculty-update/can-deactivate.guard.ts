import { Injectable } from '@angular/core';

import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

export interface CanComponentDeactivate {

 canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;

}

@Injectable({

  providedIn: 'root'

})

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  
  canDeactivate(component : CanComponentDeactivate , route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  	console.log('Come on please');

  		return component.canDeactivate ? component.canDeactivate() : true;
  }
  
}
