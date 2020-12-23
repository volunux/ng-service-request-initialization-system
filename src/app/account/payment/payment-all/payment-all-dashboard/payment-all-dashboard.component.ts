import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';

@Component({

  'selector' : 'app-payment-all-dashboard',

  'templateUrl' : './payment-all-dashboard.component.html',

  'styleUrls' : ['./payment-all-dashboard.component.css']

})

export class PaymentAllDashboardComponent implements OnInit {

  constructor(private route : ActivatedRoute , private as : AuthenticationService) { 

  }

  public systemType : string;

  public view : string;

  public title : string;

  ngOnInit() : void {

  	let data = this.route.snapshot.data;

  		this.systemType = data.dashboard.systemType;

  		this.view = data.dashboard.view;

  		this.title = data.dashboard.title;
  
  }

  get canCreate() : boolean {

    return ['student' , 'departmentPresident' , 'facultyPresident'].indexOf(this.as.userRole) > -1;
  }

  get canDeleteAll() : boolean {

    return this.as.isSuperAdministrator;
  }

}
