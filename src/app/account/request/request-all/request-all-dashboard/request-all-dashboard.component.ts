import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';

@Component({

  'selector' : 'app-request.dashboard',

  'templateUrl' : './request-all-dashboard.component.html',

  'styleUrls' : ['./request-all-dashboard.component.css']

})

export class RequestAllDashboardComponent implements OnInit {

  constructor(private route : ActivatedRoute , private as : AuthenticationService) { 

  }

  public systemType : string;

  public title : string;
  
  public view : string;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

        this.systemType = data.dashboard.systemType;

        this.title = data.dashboard.title;

        this.view = data.dashboard.view;
  }

  get canCreate() : boolean {

    return ['student' , 'departmentPresident' , 'facultyPresident'].indexOf(this.as.userRole) > -1;
  }

  get canDeleteAll() : boolean {

    return this.as.isSuperAdministrator;
  }

}
