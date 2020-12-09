import { Injectable } from '@angular/core';

import { Resolve , Router , ActivatedRouteSnapshot , RouterStateSnapshot} from '@angular/router';

import { User } from './user';

import { UserService } from './user.service';

import { Observable , of } from 'rxjs';

import { mergeMap } from 'rxjs/operators';

@Injectable({

  'providedIn' : 'root'

})

export class UserListResolverService implements Resolve<User> {

  constructor(private userService : UserService , private router : Router) { 

  }

  resolve(route : ActivatedRouteSnapshot , state : RouterStateSnapshot) : Observable<User[]> | Observable<never> | Promise<User[]> | any {

      let params = route.paramMap;

      let paramKeys = params.keys;

      let paramsObject = {}

      for (let key of paramKeys) { 

        let param = params.get(key);

        if (key) paramsObject[key] = params.get(key); }

    return this.userService.getUsers(paramsObject); }

}
