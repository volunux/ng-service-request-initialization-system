import { Injectable } from '@angular/core';

import { FormControl , FormGroup , FormBuilder , Validators , ValidatorFn } from '@angular/forms';

import { searchValidator } from '../../../shared/services/form-validators.service';

import { statusValidator } from '../../../shared/services/form-validators.service';

import { dynamicDataValidator } from '../../../shared/services/dynamic-control-validator';

import { $entryUpdateStatus2 } from '../status';

import { General } from '../general';

@Injectable()

export class RefundFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public removeControls(controls : string[] , form) : void {

    controls.forEach((control) => { form.removeControl(control); })

  }

  public mainBodyV : ValidatorFn[] = [Validators.required , Validators.minLength(1) , Validators.maxLength(8000) ];

  public entryUpdateForm() : FormGroup {

    let form = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(9) , Validators.maxLength(500)] } ] ,

      'status' : ['' , {'validators' : [Validators.required , statusValidator($entryUpdateStatus2) , Validators.minLength(2) , Validators.maxLength(30) ] } ] ,

      'stage' : ['' , {'validators' : [Validators.minLength(1) , Validators.maxLength(30) ] } ] ,
    
    });

      return form;
  }

  public searchForm(searchFilters? : General ) : FormControl {

    return new FormControl('' , [searchValidator(searchFilters)]);

  }


}
