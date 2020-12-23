import { Injectable } from '@angular/core';

import { FormBuilder , FormGroup , FormControl , Validators } from '@angular/forms';

import { dynamicDataValidator } from '../services/dynamic-control-validator';

import { searchValidator , statusValidator } from '../services/form-validators.service';

import { General } from '../interfaces/general';

@Injectable()

export class GeneralConversationFormService {

  constructor(private fb : FormBuilder) { 

  }

  public statuses : { [key : string] : string } = {'Active' : 'Active' , 'Hidden' : 'Hidden'};

  public searches : { [key : string] : string } = {'shortCode' : 'Short Code' , 'name' : 'Name' , '_id' : 'Identity'};

  public permanentData : any = {};

  public removeControls(controls : string[] = [] , form) : void {

    controls.forEach((control) => { let ctrl = form.get(control);

      return ctrl ? form.removeControl(control) : null; })
  }


  public $entryForm() : FormGroup {

  	let form : FormGroup = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(10) , Validators.maxLength(500)] } ] ,

      'num' : ['' , {'validators' : [Validators.required , Validators.minLength(20)]}] ,

      'status' : ['' , {'validators' : [Validators.required , Validators.minLength(1) , Validators.maxLength(15) ] } ] ,

      'entrySlug' : ['' , {'validators' : [Validators.required , Validators.minLength(2) , Validators.maxLength(120)] } ] });

      return form;
  }

  public searchForm(searchFilters? : General ) : FormControl {

    return new FormControl('' , [searchValidator(searchFilters)]);

  }

}
