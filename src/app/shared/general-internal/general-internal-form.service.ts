import { Injectable } from '@angular/core';

import { FormBuilder , FormGroup , FormControl , Validators } from '@angular/forms';

import { dynamicDataValidator } from '../services/dynamic-control-validator';

import { searchValidator , statusValidator } from '../services/form-validators.service';

import { General } from '../interfaces/general';

@Injectable()

export class GeneralInternalFormService {

  constructor(private fb : FormBuilder) { 

  }

  public statuses : { [key : string] : string } = {'Active' : 'Active' , 'Hidden' : 'Hidden'};

  public searches : { [key : string] : string } = {'shortCode' : 'Short Code' , 'name' : 'Name' , '_id' : 'Identity'};

  public permanentData : any = {};

  public permanentProps : { [key : string] : any[] } = {

    'faculty' : [Validators.required , Validators.minLength(2) , Validators.maxLength(150)] ,

  };

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public removeControls(controls : string[] = [] , form) : void {

    controls.forEach((control) => { let ctrl = form.get(control);

      return ctrl ? form.removeControl(control) : null; })
  }

  public disableControls(controls : string[] = [] , form) : void {

    controls.forEach((control) => { let ctrl = form.get(control);

      return ctrl ? ctrl.disable() : null; })
  }

  public $entryForm() : FormGroup {

  	let form : FormGroup = this.fb.group({

      '_id' : ['' , {'validators' : [Validators.required , Validators.minLength(1) , Validators.maxLength(150)] } ] ,

      'name' : ['' , {'validators' : [Validators.required , Validators.minLength(1) , Validators.maxLength(150)] } ] ,

      'num' : ['' , {'validators' : [Validators.required , Validators.minLength(20)]}] ,

      'shortCode' : ['' , {'validators' : [Validators.required , Validators.minLength(1) , Validators.maxLength(15) ] } ] ,

      'description' : ['' , {'validators' : [Validators.required , Validators.minLength(1) , Validators.maxLength(200)] } ] ,

      'faculty' : ['' , {'validators' : [...this.getPermanentProp('faculty')] } ] ,

      'requestUsername' : ['' , {'validators' : [Validators.required , Validators.minLength(2) , Validators.maxLength(100)] } ] ,

      'requestPassword' : ['' , {'validators' : [Validators.required , Validators.minLength(2) , Validators.maxLength(100) ]} ] ,

      'status' : ['' , {'validators' : [Validators.required , statusValidator(this.statuses) , Validators.minLength(1) , Validators.maxLength(20) ] } ]  });


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
