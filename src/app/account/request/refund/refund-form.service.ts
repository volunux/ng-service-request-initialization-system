import { Injectable } from '@angular/core';

import { FormControl , FormGroup , FormBuilder , Validators , ValidatorFn } from '@angular/forms';

import { searchValidator } from '../../../shared/services/form-validators.service';

import { statusValidator } from '../general-validators.service';

import { dynamicDataValidator } from '../../../shared/services/dynamic-control-validator';

import { General } from '../general';

@Injectable()

export class RefundFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public permanentProps : { [key : string] : any[] } = {

    'unit' : [Validators.required , Validators.minLength(2) , Validators.maxLength(150)] ,

  };

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public removeControls(controls : string[] , form) : void {

    controls.forEach((control) => { form.removeControl(control); })

  }

  public $entryForm() : FormGroup {

  	let form = this.fb.group({

  		'message' : ['' , {'validators' : [Validators.required , Validators.minLength(9) , Validators.maxLength(500)] } ]
  	
  	});

  		return form;
  }

  public mainBodyV : ValidatorFn[] = [Validators.required , Validators.minLength(1) , Validators.maxLength(8000) ];

  public entryUpdateForm() : FormGroup {

    let form = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(9) , Validators.maxLength(500)] } ] ,

      'status' : ['' , {'validators' : [Validators.required , statusValidator() , Validators.minLength(2) , Validators.maxLength(30) ] } ] ,

      'stage' : ['' , {'validators' : [Validators.minLength(1) , Validators.maxLength(30) ] } ] ,
    
    });

      return form;
  }

  public $entryCommentForm() : FormGroup {

    let form = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(9) , Validators.maxLength(500)] } ] });

      return form;
  }

  public $entryReplyForm() : FormGroup {

    let form = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(9) , Validators.maxLength(500)] } ] ,

      'commentAuthorName' : ['' , {'validators' : [Validators.required , Validators.maxLength(150)] } ] 

    });

      return form;
  }

  public createPermanent(data : General , form) : void {

    for (let $prop in data) {

      let propVal = $prop.toLowerCase();

      this.permanentData[propVal] = data[$prop];

      form.get(propVal) ? form.get(propVal).setValidators([...this.permanentProps[propVal] , dynamicDataValidator(this.getMyData(propVal) , $prop)]) : null;

      form.get(propVal) ? form.get(propVal).updateValueAndValidity() : null;  }

    form.updateValueAndValidity();

  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

  public searchForm(searchFilters? : General ) : FormControl {

    return new FormControl('' , [searchValidator(searchFilters)]);

  }


}
