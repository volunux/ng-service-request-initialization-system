import { Component , OnInit , Injectable , Inject } from '@angular/core';

import { Router } from '@angular/router';

import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from '../authentication.service';

import { Api , Api_Token } from '../../configuration';

import { DataService } from '../data.service';

import { User , UserFormModel } from '../user';

import { UserOther } from '../user-other';

import { forbiddenNamesValidator , firstLastNames } from '../forbidden-names.directive';

import { emailAddressValidator } from '../email-address.directive';

import { simplePasswordValidator } from '../simple-password.directive';

import { VerifyUsernameValidator , usernameVerification} from '../verify-username.service';

import { VerifyEmailAddressValidator , emailAddressVerification } from '../verify-email.service';

@Component({

  selector: 'app-sign-up',

  templateUrl: './sign-up.component.html',

  styleUrls: ['./sign-up.component.css']

})

export class SignUpComponent implements OnInit {

  constructor(private authService : AuthenticationService , private dataService : DataService , private formBuilder : FormBuilder ,

              private verifyUsernameValidator : VerifyUsernameValidator , private verifyEmailAddressValidator : VerifyEmailAddressValidator ,

              public http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private router : Router) { 

  }

    public error : any;

   public signUpForm : FormGroup

  ngOnInit(): void {

    this.dataService.createUser()

      .subscribe((data : {'Department' : string[] , 'Faculty' : string[] , 'Level' : string[] , 'Country' : string[]}) => {

          this.userOthers = new UserOther(data.Department , data.Faculty , data.Level , data.Country);
      });

  this.signUpForm = this.formBuilder.group({

    'firstName' : ['' , {'validators' : 

      [Validators.required , Validators.minLength(2) , Validators.maxLength(20) , forbiddenNamesValidator(/moderator|administrator|superAdministrator/i)] , 'updateOn' : 'blur' } ] ,

    'lastName' : ['' , {'validators' : 

      [Validators.required , Validators.minLength(2) , Validators.maxLength(20) , forbiddenNamesValidator(/moderator|administrator|superAdministrator/i)] , 'updateOn' : 'blur' } ] ,

    'username' : ['' , {'validators' : 

      [Validators.required , Validators.minLength(3) , Validators.maxLength(20) , forbiddenNamesValidator(/moderator|administrator|superAdministrator/i)] ,

      'asyncValidators' : [usernameVerification(this.authService , this.http , HttpHeaders , this.apiConfig).bind(this)] , 'updateOn' : 'blur' } ] ,

    'emailAddress' : ['' , {'validators' : 

      [Validators.required , Validators.minLength(8) , Validators.maxLength(50) , emailAddressValidator(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) ,

      forbiddenNamesValidator(/moderator|administrator|superAdministrator/i)] ,

      'asyncValidators' : [emailAddressVerification(this.authService , this.http , HttpHeaders , this.apiConfig).bind(this)] , 'updateOn' : 'blur' } ] ,

    'department' : ['' , { 'validators' : [Validators.required , Validators.minLength(2) , Validators.maxLength(150)] , 'updateOn' : 'blur' } ] ,

    'faculty' : ['' , {'validators' : [Validators.required , Validators.minLength(2) , Validators.maxLength(150)] , 'updateOn' : 'blur' } ] ,

    'level' : ['' , {'validators' : [Validators.required , Validators.minLength(2) , Validators.maxLength(50)] , 'updateOn' : 'blur' } ] ,

    'country' : ['' , {'validators' : [Validators.required , Validators.minLength(2) , Validators.maxLength(50)] , 'updateOn' : 'blur' } ] ,

    'password' : ['' , {'validators' : [Validators.required , Validators.minLength(7) , Validators.maxLength(35) , simplePasswordValidator()] , 'updateOn' : 'blur' }  ] ,

    'identityNumber' : ['' , [Validators.maxLength(30)] ] , 'matriculationNumber' : ['' , [Validators.maxLength(30)] ] ,

    'about' : ['' , [Validators.maxLength(4) , Validators.maxLength(300)] ] ,

  } , {'validators' : firstLastNames() });
  
  }

  public onSubmitSignUp(user : User) {

    // this.authService.signUp(user);

      this.dataService.signUp(user)

        .subscribe((token) => {

          this.authService.saveToken(token);

          this.router.navigate(['/']);  } ,

          (error) => { this.error = {...error , 'resource' : error.resource };  });

  }

  public userOthers : UserOther;

  public title : string = 'Sign Up';



  get firstName() {

    return this.signUpForm.get('firstName') as FormControl;
  }

  get lastName() {

    return this.signUpForm.get('lastName') as FormControl;
  }

  get username() {

    return this.signUpForm.get('username') as FormControl;
  }

  get emailAddress() {

    return this.signUpForm.get('emailAddress') as FormControl;
  }

  get department() {

    return this.signUpForm.get('department') as FormControl;
  }

  get faculty() {

    return this.signUpForm.get('faculty') as FormControl;
  }

  get level() {

    return this.signUpForm.get('level') as FormControl;
  }

  get country() {

    return this.signUpForm.get('country') as FormControl;
  }

  get password() {

    return this.signUpForm.get('password') as FormControl;
  }

  get identityNumber() {

    return this.signUpForm.get('identityNumber') as FormControl;
  }

  get matriculationNumber() {

    return this.signUpForm.get('matriculationNumber') as FormControl;
  }

  get about() {

    return this.signUpForm.get('about') as FormControl;
  }

  get isFormValid() : boolean {

    return this.signUpForm.valid;
  }
 
}
