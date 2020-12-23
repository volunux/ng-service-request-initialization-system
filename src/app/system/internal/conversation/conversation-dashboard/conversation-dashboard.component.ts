import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({

  'selector' : 'app-conversation-dashboard',

  'templateUrl' : './conversation-dashboard.component.html',

  'styleUrls' : ['./conversation-dashboard.component.css']

})

export class ConversationDashboardComponent implements OnInit {

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
