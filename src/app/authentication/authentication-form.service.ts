import { Injectable , Inject } from '@angular/core';

import { Validators , ValidatorFn , FormBuilder , FormGroup , FormControl } from '@angular/forms';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from '../authentication/authentication.service';

import { General } from './general';

import { Api , Api_Token } from '../configuration';

import { emailAddress , forbiddenNames } from './general';

import { dynamicDataValidator } from '../shared/services/dynamic-control-validator';

import { emailAddressValidator } from '../shared/services/email-address-validators.service';

import { simplePasswordValidator , confirmPasswordValidator , currentAndNewPasswordValidator } from '../shared/services/password-validators.service';

import { usernameVerification } from '../shared/services/verify-username.service';

import { emailAddressVerification } from '../shared/services/verify-email.service';

@Injectable()

export class AuthenticationFormService {

  constructor(public aS : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api ) { 

  }

  public permanentData : any = {};

  public entryValidators : { [key : string] : ValidatorFn[] } = {

    'password' : [Validators.required , Validators.minLength(7) , Validators.maxLength(35) , simplePasswordValidator()] ,

  }

  public resetPassword() : FormGroup {

    let form = new FormGroup({

    'newPassword' : new FormControl('' , this.entryValidators.password) ,

    'confirmPassword' : new FormControl('' , this.entryValidators.password)

    } , [confirmPasswordValidator() ]);

    return form;
  }


}
