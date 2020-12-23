import { Component , Input , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({

  'selector' : 'app-general-conversation-dashboard',
  
  'templateUrl' : './general-conversation-dashboard.component.html',
  
  'styleUrls' : ['./general-conversation-dashboard.component.css']

})

export class GeneralConversationDashboardComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  @Input('system-type') public systemType : string;

  @Input() public title : string;

  @Input() public view : string;

  ngOnInit() : void {

  }

}
