import { Injectable } from '@angular/core';

import { Resolve , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';

import { Observable , of } from 'rxjs';

@Injectable({

  providedIn: 'root'

})

export class ResolverService implements Resolve<any> {

  constructor() { 

  }

  resolve(route : ActivatedRouteSnapshot , state : RouterStateSnapshot) : Observable<any> {

  	return of(true);

  }

}
