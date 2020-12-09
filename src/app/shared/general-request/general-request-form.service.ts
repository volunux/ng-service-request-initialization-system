import { Injectable } from '@angular/core';

import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';

import { searchValidator } from '../services/form-validators.service';

import { statusValidator } from './general-validators.service';

import { dynamicDataValidator } from './dynamic-control-validator';

import { General } from './general';

@Injectable()

export class GeneralRequestFormService {

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

    controls.forEach((control) => { let ctrl = form.get(control);

      return ctrl ? form.removeControl(control) : null; })
  }

  public $entryForm() : FormGroup {

  	let form = this.fb.group({

  		'message' : ['' , {'validators' : [Validators.required , Validators.minLength(9) , Validators.maxLength(500)] } ]
  	
  	});

  		return form;
  }

  public entryUpdateForm() : FormGroup {

    let form = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(9) , Validators.maxLength(500)] } ] ,

      'status' : ['' , {'validators' : [Validators.required , statusValidator() , Validators.minLength(2) , Validators.maxLength(30) ] } ] ,

      'requestUsername' : ['' , {'validators' : [Validators.minLength(5) , Validators.maxLength(100)] } ] ,

      'requestPassword' : ['' , {'validators' : [Validators.minLength(5) , Validators.maxLength(100)] } ] ,
    
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

    public $entryTransferForm() : FormGroup {

    let form = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(9) , Validators.maxLength(500)] } ] ,

      'unit' : ['' , {'validators' : [...this.getPermanentProp('unit')] } ] ,

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

