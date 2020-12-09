import { Component , Input , OnInit } from '@angular/core';

import { General } from '../../interfaces/general';

@Component({

  'selector' : 'app-request-comment-detail',
  
  'templateUrl' : './request-comment-detail.component.html',
  
  'styleUrls' : ['./request-comment-detail.component.css']

})

export class RequestCommentDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
 	} 

  @Input('system-type') public systemType : string;

  @Input() public comment : General;

}
