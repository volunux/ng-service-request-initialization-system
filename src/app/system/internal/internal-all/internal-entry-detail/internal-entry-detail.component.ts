import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({

  'selector' : 'app-internal-entry-detail',

  'templateUrl' : './internal-entry-detail.component.html',

  'styleUrls' : ['./internal-entry-detail.component.css']

})

export class InternalEntryDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  ngOnInit(): void {

  	let data = this.route.snapshot.data;

  	this.systemType = data.detail.systemType;

  	this.title = data.detail.title;

  	this.view = data.detail.view;

  	this.viewWord = data.detail.viewWord;

  	this.link = data.detail.link;

  	this.$link = data.detail.$link;
  
  }

}
