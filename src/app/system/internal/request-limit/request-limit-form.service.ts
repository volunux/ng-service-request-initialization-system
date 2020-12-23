import { Injectable } from '@angular/core';

import { FormBuilder , FormGroup , FormControl , Validators } from '@angular/forms';

import { statusValidator } from '../../../shared/services/form-validators.service';

import { General } from '../general';

@Injectable()

export class RequestLimitFormService {

  constructor(private fb : FormBuilder) { 

  }

  public statuses : { [key : string] : string } = {'Active' : 'Active' , 'Hidden' : 'Hidden'};


  public removeControls(controls : string[] = [] , form) : void {

    controls.forEach((control) => { let ctrl = form.get(control);

      return ctrl ? form.removeControl(control) : null; })
  }

  public $entryForm() : FormGroup {

  	let form : FormGroup = this.fb.group({

      'numberRemaining' : ['' , {'validators' : [Validators.required , Validators.max(3) ] } ] ,

      '_id' : ['' , {'validators' : [Validators.required , Validators.minLength(1) , Validators.maxLength(150)] } ] ,

      'author' : ['' , {'validators' : [Validators.required , Validators.minLength(1) , Validators.maxLength(150)] } ] ,

      'status' : ['' , {'validators' : [Validators.required , statusValidator(this.statuses) , Validators.minLength(1) , Validators.maxLength(20) ] } ]  });

      return form;
  }


}
