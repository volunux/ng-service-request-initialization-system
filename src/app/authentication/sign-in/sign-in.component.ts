import { Component , OnInit } from '@angular/core';

import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';

import { User } from '../user';

import { AuthenticationService } from '../authentication.service';

import { emailAddressValidator } from '../email-address.directive';

@Component({

  selector: 'app-sign-in',

  templateUrl: './sign-in.component.html',

  styleUrls: ['./sign-in.component.css']

})

export class SignInComponent implements OnInit {

  constructor(private authService : AuthenticationService , private fb : FormBuilder) { 

  }

  public description : string = `All members of the system are required to signin before they can complete or perform any action or task.`;

  public title : string = 'Sign In';

  ngOnInit(): void {
  
  }

  get emailAddress() : FormControl {

    return this.signInForm.get('emailAddress') as FormControl;
  }

  get password() : FormControl {

    return this.signInForm.get('password') as FormControl;
  }

  get isFormValid() : boolean {

    return this.signInForm.valid;
  }

  public onSubmitSignIn(user : User) : any {

    this.authService.signIn(user);

  }

  public signInForm : FormGroup = this.fb.group({

    'emailAddress' : ['' , {'validators' : [Validators.required , Validators.minLength(5) , Validators.maxLength(50) , emailAddressValidator(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)] } ] ,

    'password' : ['' , {'validators' : [Validators.required , Validators.minLength(8) , Validators.maxLength(35)] } ]  });

}
