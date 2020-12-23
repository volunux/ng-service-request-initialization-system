import { Component , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-statistics-dashboard',

  'templateUrl' : './statistics-dashboard.component.html',

  'styleUrls' : ['./statistics-dashboard.component.css']

})

export class StatisticsDashboardComponent implements OnInit {

  constructor() { 

  }

  public systemType : string = 'Statistics';

  public title : string = 'Statistics';
  
  public view : string = 'gen-internal';

	public entries : { [key : string] : string } = {

		'request' : 'Request' ,

		'payment' : 'Payment' ,

		'internal' : 'Internal' ,

		'user' : 'User' ,

		'reply' : 'Reply' ,

		'comment-reply' : 'Comment & Reply'	}

  ngOnInit(): void {
  
  }

}
