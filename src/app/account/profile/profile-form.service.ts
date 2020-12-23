import { Injectable , Inject } from '@angular/core';

import { Validators , ValidatorFn , FormBuilder , FormGroup , FormControl } from '@angular/forms';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from '../../authentication/authentication.service';

import { General } from './general';

import { Api , Api_Token } from '../../configuration';

import { emailAddress , forbiddenNames } from './general';

import { dynamicDataValidator } from '../../shared/services/dynamic-control-validator';

import { emailAddressValidator } from '../../shared/services/email-address-validators.service';

import { simplePasswordValidator , confirmPasswordValidator , currentAndNewPasswordValidator } from '../../shared/services/password-validators.service';

import { usernameVerification } from '../../shared/services/verify-username.service';

import { emailAddressVerification } from '../../shared/services/verify-email.service';

@Injectable()

export class ProfileFormService {

  constructor(public aS : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api ) { 

  }

  public permanentData : any = {};

  public entryValidators : { [key : string] : ValidatorFn[] } = {

    'first$last$Name' : [Validators.required , Validators.minLength(2) , Validators.maxLength(20)] ,

    'about' : [Validators.required , Validators.minLength(9) , Validators.maxLength(300)] ,

    'emailAddress' : [Validators.required , Validators.minLength(7) , Validators.maxLength(50) , emailAddressValidator(emailAddress) ] ,

    'jamb$matric$identity' : [Validators.minLength(2) , Validators.maxLength(30)] ,

    'password' : [Validators.required , Validators.minLength(7) , Validators.maxLength(35) , simplePasswordValidator()] ,

  }

  public permanentProps : General = {

    'level' : [Validators.required , Validators.minLength(2) , Validators.maxLength(50)] ,

    'country' : [Validators.required , Validators.minLength(2) , Validators.maxLength(50)]

  };

  public propAsyncValidator : General = {

    'emailAddress' : [emailAddressVerification(this.aS , this.http , HttpHeaders , this.apiConfig).bind(this)] ,

    'username' : [usernameVerification(this.aS , this.http , HttpHeaders , this.apiConfig).bind(this)]
  }

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public profileUpdate() : FormGroup {

    return this.fb.group({

      'firstName' : ['' , {'validators' : this.entryValidators.first$last$Name } ] ,

      'lastName' : ['' , {'validators' : this.entryValidators.first$last$Name } ] ,

      'about' : ['' , {'validators' : this.entryValidators.about } ] ,

      'emailAddress' : new FormControl('' , this.entryValidators.emailAddress ) ,

      'country' : ['' , {'validators' : [...this.getPermanentProp('country')] } ] ,

      'level' : ['' , {'validators' : [...this.getPermanentProp('level')] }] ,

      'matriculationNumber' : ['' , {'validators' : this.entryValidators.jamb$matric$identity }] ,

      'jambRegistrationNumber' : ['' , {'validators' : this.entryValidators.jamb$matric$identity }] ,

      'identityNumber' : ['' , {'validators' : this.entryValidators.jamb$matric$identity }] ,

    } );

  }

  public changePassword() : FormGroup {

  	let form = new FormGroup({

  	'password' : new FormControl('' , this.entryValidators.password) ,

  	'newPassword' : new FormControl('' , this.entryValidators.password) ,

  	'confirmPassword' : new FormControl('' , this.entryValidators.password)

  	} , [confirmPasswordValidator() , currentAndNewPasswordValidator()]);

  	return form;
  }

  public changeDisplay() : FormGroup {

    let form = new FormGroup({

    'profilePhoto' : this.fb.control('' , {'validators' : [Validators.required]}) ,

    'signature' : this.fb.control('' , {'validators' : [Validators.required]})  });

    return form;
  }

  public statusProfile() : FormGroup {

    let form = new FormGroup({

      'firstName' : new FormControl('' , this.entryValidators.first$last$Name ) ,

      'lastName' : new FormControl('' , this.entryValidators.first$last$Name ) ,

      'emailAddress' : new FormControl('' , this.entryValidators.emailAddress ) ,

      'identityNumber' : new FormControl('' , this.entryValidators.jamb$matric$identity ) } );

    return form;
  }


  public createPermanent(data : General , form) : void {

    for (let $prop in data) {

      let propVal = $prop.toLowerCase();

      this.permanentData[propVal] = data[$prop];

      form.get(propVal) ? form.get(propVal).setValidators([...this.permanentProps[propVal] , dynamicDataValidator(this.getMyData(propVal) , $prop)]) : null;

      form.get(propVal) ? form.get(propVal).updateValueAndValidity() : null;
    }

    form.updateValueAndValidity();

  }


  public removeControls(controls : string[] , form) : void {

    controls.forEach((control) => { form.removeControl(control); })

  }

  public removeAsyncValidators(controls : string[] , form) : void {

    controls.forEach((control) => { 

      if (form.get(control)) {

        form.get(control).clearAsyncValidators();

        form.get(control).updateValueAndValidity();  }   });

        form.updateValueAndValidity();

  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

  public setAsyncNullError(control : string , formCtrl : FormControl) : void {

      formCtrl.setErrors({[control + 'Service'] : null} , {'emitEvent' : true});

      formCtrl.updateValueAndValidity({'onlySelf' : true , 'emitEvent' : true});

  }


}
