import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { General } from '../general';

@Component({

  'selector' : 'app-request.dashboard',

  'templateUrl' : './request-dashboard.component.html',

  'styleUrls' : ['./request-dashboard.component.css']

})

export class RequestDashboardComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

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

}
