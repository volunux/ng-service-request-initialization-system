import { Injectable } from '@angular/core';

import { Resolve , ActivatedRouteSnapshot , RouterStateSnapshot , Router } from '@angular/router';

import { User } from '../user';

import { UserService } from '../user.service';

import { Observable , EMPTY , of } from 'rxjs';

import { switchMap , mergeMap , take , catchError } from 'rxjs/operators';

@Injectable({

  'providedIn' : 'root'

})

export class UserDeleteResolverService implements Resolve<Observable<User>> {

  constructor(private us : UserService , private router : Router) { 

  }

  public resolve(route : ActivatedRouteSnapshot , state : RouterStateSnapshot) : Observable<User> | Promise<User> | Observable<never> | any {

   let userIdx : string = route.paramMap.get('entry');

   	return this.us.deleteUser(userIdx)

   		.pipe(

   			take(1) ,

   			mergeMap((user) => {

						if (user) { return of(user); } }) ,

   			catchError((error) => {

   				this.router.navigate(['system' , 'internal' , 'user' , 'entries']);

							return EMPTY;		})
   			)
  	}

}
