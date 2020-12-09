import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { FormBuilder , FormControl , FormGroup , Validators } from '@angular/forms';

import { statusValidator , searchValidator } from './request-credential-form-validators.directive';

@Injectable()

export class RequestCredentialFormService {

  constructor(public fb : FormBuilder) { 

  }

  public createForm() : FormGroup {

  	return this.fb.group({

      'requestUsername' : ['' , {'validators' : [Validators.required , Validators.minLength(2) , Validators.maxLength(100)] } ,] ,

      'requestPassword' : ['' , {'validators' : [Validators.required , Validators.minLength(2) , Validators.maxLength(100) ]}] ,

      'status' : ['' , {'validators' : [Validators.required , statusValidator() , Validators.minLength(2) , Validators.maxLength(20) ]}]

    });

  }

  public searchForm() : FormControl {

    return new FormControl('' , [searchValidator()]);

  }

}
