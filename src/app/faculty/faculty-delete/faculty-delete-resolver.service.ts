import { Injectable } from '@angular/core';

import { Resolve , ActivatedRouteSnapshot , RouterStateSnapshot , Router } from '@angular/router';

import { Faculty } from '../faculty';

import { FacultyService } from '../faculty.service';

import { Observable , EMPTY , of } from 'rxjs';

import { switchMap , mergeMap , take , catchError } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'

})

export class FacultyDeleteResolverService implements Resolve<Observable<Faculty>> {

  constructor(private facultyService : FacultyService , private router : Router) { 

  }

  public resolve(route : ActivatedRouteSnapshot , state : RouterStateSnapshot) : Observable<Faculty> | Promise<Faculty> | Observable<never> | any {

   let facultyIdx : number = +route.paramMap.get('faculty');

   	return this.facultyService.deleteFaculty(facultyIdx)

   		.pipe(

   			take(1) ,

   			mergeMap((faculty) => {

						if (faculty) { return of(faculty); } }) ,

   			catchError((error) => {

   				this.router.navigate(['faculty' , 'entries']);

							return EMPTY;		})
   			)
  	}

}
