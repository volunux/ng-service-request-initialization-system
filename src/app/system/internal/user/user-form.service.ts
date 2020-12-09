import { Injectable , Inject } from '@angular/core';

import { AbstractControl , FormBuilder , FormControl , FormGroup , Validators , ValidatorFn } from '@angular/forms';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from '../../../authentication/authentication.service';

import { General } from './general';

import { emailAddress , forbiddenNames } from './general';

import { Api , Api_Token } from '../../../configuration';

import { statusValidator , roleValidator , searchValidator } from '../../../shared/services/form-validators.service';

import { forbiddenNamesValidator } from './forbidden-names.directive';

import { emailAddressValidator } from '../../../shared/services/form-validators.service';

import { simplePasswordValidator , confirmPasswordValidator } from '../../../shared/services/password-validators.service';

import { dynamicDataValidator } from '../../../shared/services/dynamic-control-validator';

import { usernameVerification } from '../../../shared/services/verify-username.service';

import { emailAddressVerification } from '../../../shared/services/verify-email.service';

@Injectable()

export class UserFormService {

  constructor(public aS : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api ) { 

  }


  public permanentData : any = {};

  public permanentProps : General = {

    'faculty' : [Validators.required , Validators.minLength(2) , Validators.maxLength(150)] ,

    'department' : [Validators.required , Validators.minLength(2) , Validators.maxLength(150)] ,

    'level' : [Validators.required , Validators.minLength(2) , Validators.maxLength(50)] ,

    'unit' : [Validators.required , Validators.minLength(2) , Validators.maxLength(150)] ,

    'country' : [Validators.required , Validators.minLength(2) , Validators.maxLength(50)]

  };


  public entryValidators : { [key : string] : ValidatorFn[] } = {

    'first$last$Name' : [Validators.required , Validators.minLength(2) , Validators.maxLength(20)] ,

    'jamb$matric$identity' : [Validators.minLength(2) , Validators.maxLength(30)] ,

    'password' : [Validators.required , Validators.minLength(7) , Validators.maxLength(35) , simplePasswordValidator()] ,

  }

  public propAsyncValidator : General = {

    'emailAddress' : [emailAddressVerification(this.aS , this.http , HttpHeaders , this.apiConfig).bind(this)] ,

    'username' : [usernameVerification(this.aS , this.http , HttpHeaders , this.apiConfig).bind(this)]
  }

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public createForm() : FormGroup {

  	return this.fb.group({

      'firstName' : ['' , {'validators' : this.entryValidators.first$last$Name } ] ,

      'lastName' : ['' , {'validators' : this.entryValidators.first$last$Name } ] ,

      'username' : ['' , {'validators' : [...this.entryValidators.first$last$Name , forbiddenNamesValidator(forbiddenNames)] ,

      'asyncValidators' : [usernameVerification(this.aS , this.http , HttpHeaders , this.apiConfig).bind(this)] , 'updateOn' : 'blur' } ] ,

    'emailAddress' : ['' , {'validators' : 

      [Validators.required , Validators.minLength(7) , Validators.maxLength(50) , emailAddressValidator(emailAddress) ] ,

      'asyncValidators' : [emailAddressVerification(this.aS , this.http , HttpHeaders , this.apiConfig).bind(this)]  , 'updateOn' : 'blur' } ] ,

    'password' : ['' , {'validators' : this.entryValidators.password }  ] ,

    'confirmPassword' : ['' , {'validators' : this.entryValidators.password  }  ] ,

      'about' : ['' , {'validators' : [Validators.required , Validators.minLength(9) , Validators.maxLength(300)] } ] ,

      'faculty' : ['' , {'validators' : [...this.getPermanentProp('faculty')] } ] ,

      'department' : ['' , {'validators' : [...this.getPermanentProp('department')] } ] ,

      'level' : ['' , {'validators' : [...this.getPermanentProp('level')] } ] ,

      'unit' : ['' , {'validators' : [...this.getPermanentProp('unit')] } ] ,

      'country' : ['' , {'validators' : [...this.getPermanentProp('country')] } ] ,

      'role' : ['' , {'validators' : [Validators.required , roleValidator , Validators.minLength(2) , Validators.maxLength(40)] } ,] ,

      'status' : ['' , {'validators' : [Validators.required , statusValidator , Validators.minLength(2) , Validators.maxLength(30) ]}] ,

      'matriculationNumber' : ['' , {'validators' : this.entryValidators.jamb$matric$identity }] ,

      'jambRegistrationNumber' : ['' , {'validators' : this.entryValidators.jamb$matric$identity }] ,

      'identityNumber' : ['' , {'validators' : this.entryValidators.jamb$matric$identity }] ,

    } , { 'validator' : confirmPasswordValidator() });

  }

  public searchForm(searchFilters? : General ) : FormControl {

    return new FormControl('' , [searchValidator(searchFilters)]);

  }

  public entryForm : FormGroup = this.createForm();


    get firstName() {

      return this.entryForm.get('firstName') as FormControl;
  }

  get lastName() {

      return this.entryForm.get('lastName') as FormControl;
  }

  get username() {

      return this.entryForm.get('username') as FormControl;
  }

  get emailAddress() {

      return this.entryForm.get('emailAddress') as FormControl;
  }

  get password() {

      return this.entryForm.get('password') as FormControl;
  }

  get confirmPassword() {

      return this.entryForm.get('confirmPassword') as FormControl;
  }

  get about() {

      return this.entryForm.get('about') as FormControl;
  }

  get department() {

      return this.entryForm.get('department') as FormControl;
  }

  get faculty() {

      return this.entryForm.get('faculty') as FormControl;
  }

  get level() {

      return this.entryForm.get('level') as FormControl;
  }

  get unit() {

      return this.entryForm.get('unit') as FormControl;
  }

  get country() {

      return this.entryForm.get('country') as FormControl;
  }


  get matriculationNumber() {

      return this.entryForm.get('matriculationNumber') as FormControl;
  }

  get jambRegistrationNumber() {

      return this.entryForm.get('jambRegistrationNumber') as FormControl;
  }

  get identityNumber() {

      return this.entryForm.get('identityNumber') as FormControl;
  }

  get role() {

      return this.entryForm.get('role') as FormControl;
  }

  get status() {

      return this.entryForm.get('status') as FormControl;
  }

  get isFormValid() {

    return this.entryForm.valid;
  }

  public createPermanent(data : General) : void {

    for (let $prop in data) {

      let propVal = $prop.toLowerCase();

      this.permanentData[propVal] = data[$prop];

      this.entryForm.get(propVal) ? this.entryForm.get(propVal).setValidators([...this.permanentProps[propVal] , dynamicDataValidator(this.getMyData(propVal) , $prop)]) : null;

      this.entryForm.get(propVal) ? this.entryForm.get(propVal).updateValueAndValidity() : null;
    }

    this.entryForm.updateValueAndValidity();

  }


  public removeControls(controls : string[]) : void {

    controls.forEach((control) => { this.entryForm.removeControl(control); })

  }

  public removeAsyncValidators(controls : string[]) : void {

    controls.forEach((control) => { 

      if (this.entryForm.get(control)) {

        this.entryForm.get(control).clearAsyncValidators();

        this.entryForm.get(control).updateValueAndValidity();  }   });

        this.entryForm.updateValueAndValidity();

  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

  public setAsyncNullError(control : string , formCtrl : FormControl) : void {

      formCtrl.setErrors({[control + 'Service'] : null} , {'emitEvent' : true});

      formCtrl.updateValueAndValidity({'onlySelf' : true , 'emitEvent' : true});

  }

}
