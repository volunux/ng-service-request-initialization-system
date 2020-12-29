import { Injectable , Inject } from '@angular/core';

import { Router } from '@angular/router';

import { Api , Api_Token } from '../configuration';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { BROWSER_STORAGE } from './storage';

import { User , Payload } from './user';

import { DataService } from './data.service';

import { Observable , of } from 'rxjs';

import { map , tap } from 'rxjs/operators';

@Injectable({

  'providedIn' : 'root'

})

export class AuthenticationService {

  constructor(@Inject(BROWSER_STORAGE) private storage : Storage , private dataService : DataService , private router : Router ,

               @Inject(Api_Token) private apiConfig : Api , private http : HttpClient) { 

  }

  public getToken() : string {

  	return this.storage.getItem('rsis-token');
  }

  public redirectAddress : string = '';

  public getUserId() : string {

     return this.storage.getItem('s_id');
  }

  get userMinorDetails() : User {

    const token : string = this.getToken();

    const { role , department , faculty , status } = JSON.parse(atob(token.split('.')[1]));

    return { role , department , faculty , status } as User;

  }

  get isSuperAdministrator() : boolean {

    const token : string = this.getToken();

    const { role } = JSON.parse(atob(token.split('.')[1]));

    if (role == 'superAdministrator') return true;

    return false;
  }

  get userStatus() : string {

    const token : string = this.getToken();

    const { status } = JSON.parse(atob(token.split('.')[1]));

    return status;

  }

  get userRole() : string {

    const token : string = this.getToken();

    const { role } = JSON.parse(atob(token.split('.')[1]));

    return role;

  }

  get userDepartment() : string {

    const token : string = this.getToken();

    const { department } = JSON.parse(atob(token.split('.')[1]));

    return department;

  }

  get userFaculty() : string {

    const token : string = this.getToken();

    const { faculty } = JSON.parse(atob(token.split('.')[1]));

    return faculty;

  }

  get userId() : string {

    const token : string = this.getToken();

    const { _id } = JSON.parse(atob(token.split('.')[1]));

    return _id;

  }

  public saveUserId(payload : Payload) : void {

    return this.storage.setItem('s_id' , payload.s_id);
  }

  public saveToken(payload : Payload) : void {

  	this.storage.setItem('rsis-token' , payload.token);
  }

  public signUp(user : User) : any {

  		return this.dataService.$addUser(user)

	  		.subscribe((token) => {

	  			this.saveToken(token);

          this.router.navigate(['/']);  } ,

          (error) => {

          });
  		}

  public signIn(user : User) : any {

		return this.dataService.signIn(user)

			.subscribe((token) => {

					this.saveToken(token);

          this.saveUserId(token);

          this.redirectAddress ? this.router.navigate(['/system']) : this.router.navigate([this.redirectAddress]);   });
  	}

  public logout() : void {

  		this.storage.removeItem('rsis-token');

      this.storage.removeItem('s_id');
  }

  public isLoggedIn() : boolean { const token : string = this.getToken();

  	if (token) { const payload = JSON.parse(atob(token.split('.')[1]));

  		return payload.exp > (Date.now() / 1000);		}

  		else { return false;	}
  }

  public getCurrentUser() : User {

  		if (this.isLoggedIn()) {

  				const token : string = this.getToken();

  				const { emailAddress , username , role , department , faculty , status } = JSON.parse(atob(token.split('.')[1]));

  				return { emailAddress , username , role , department , faculty , status } as User;
  		}
  }

   public authenticateEmailAddress(emailAddress : string) : Observable<any> {

      return of(null);


   }


}
