import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication/authentication.service';

import { HistoryService } from '../history.service';

import { User } from '../authentication/user';

@Component({

  selector: 'app-framework',

  templateUrl: './framework.component.html',

  styleUrls: ['./framework.component.css']

})

export class FrameworkComponent implements OnInit {

  constructor(private authService : AuthenticationService , private historyService : HistoryService) { 

  }

  ngOnInit(): void {
  
  }

  public logout() : void {

  	this.authService.logout();
  }

  public isLoggedIn() : boolean {

  	return this.authService.isLoggedIn();
  }

  public getUsename() : string {

  	const user : User = this.authService.getCurrentUser();

  	return user ? user.username : 'Guest';
  }

}
