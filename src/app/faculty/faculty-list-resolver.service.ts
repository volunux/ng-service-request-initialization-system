import { Injectable } from '@angular/core';

import { Resolve , Router , ActivatedRouteSnapshot , RouterStateSnapshot} from '@angular/router';

import { Faculty } from './faculty';

import { FacultyService } from './faculty.service';

import { Observable , of } from 'rxjs';

import { mergeMap } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'

})

export class FacultyListResolverService implements Resolve<Faculty> {

  constructor(private facultyService : FacultyService , private router : Router) { 

  }

  resolve(route : ActivatedRouteSnapshot , state : RouterStateSnapshot) : Observable<Faculty[]> | Observable<never> | Promise<Faculty[]> | any {

      let params = route.paramMap;

      let paramKeys = params.keys;

      let paramsObject = {}

      for (let key of paramKeys) { 

        let param = params.get(key);

        if (key) paramsObject[key] = params.get(key); }

    return this.facultyService.getFaculties(paramsObject); }

}
