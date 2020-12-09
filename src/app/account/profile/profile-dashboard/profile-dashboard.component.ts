import { Component , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-profile-dashboard',

  'templateUrl' : './profile-dashboard.component.html',

  'styleUrls' : ['./profile-dashboard.component.css']

})

export class ProfileDashboardComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  public systemType : string = 'Profile';

  public title : string = 'Profile';

  public view : string = 'upr';

}
