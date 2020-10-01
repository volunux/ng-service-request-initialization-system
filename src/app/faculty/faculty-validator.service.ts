import { Injectable } from '@angular/core';

import { FacultyModule } from './faculty.module';

import { FacultyService } from './faculty.service';

import { Router } from '@angular/router';

import { FormBuilder , FormGroup , FormControl , Validators } from '@angular/forms';

@Injectable()

export class FacultyValidatorService {

  constructor(public router : Router , public fb : FormBuilder , public facultyService : FacultyService) { 

  }

  public createForm() : FormGroup {

  	return this.fb.group({

      'name' : ['' , {'validators' : [Validators.required , Validators.minLength(2)] , 'updateOn' : 'blur' } ,] ,

      'shortCode' : ['' , {'validators' : [Validators.required , Validators.minLength(2) ] , 'updateOn' : 'blur' }] ,

      'num' : ['' , {'validators' : [Validators.required , Validators.minLength(2)] , 'updateOn' : 'blur' }]  });

  }

}
