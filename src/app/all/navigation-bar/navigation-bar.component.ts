import { Component , OnInit } from '@angular/core';

import { ActivatedRoute , Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';

@Component({

  'selector' : 'app-navigation-bar',

  'templateUrl' : './navigation-bar.component.html',

  'styleUrls' : ['./navigation-bar.component.css'] ,

})

export class NavigationBarComponent implements OnInit {

  constructor(private as : AuthenticationService , private router : Router) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  ngOnInit() : void {

  }

  get isLoggedIn() : boolean {

		return this.as.isLoggedIn();  	
  }

  get isAdmin() : string {

  	return ['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.as.userRole) > -1 ? '/system' : '/';
  }

  get isAdminStatus() : boolean {

    return ['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.as.userRole) > -1;    
  }

  public signOut(evt) : any {

      evt.preventDefault();

      evt.stopPropagation();

      this.as.logout();

      return this.router.navigate(['/']);
  }

}
