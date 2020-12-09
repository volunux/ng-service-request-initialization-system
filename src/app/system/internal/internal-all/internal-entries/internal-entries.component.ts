import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { General } from '../../general';

@Component({

  'selector' : 'app-internal-entries',

  'templateUrl' : './internal-entries.component.html',

  'styleUrls' : ['./internal-entries.component.css']

})

export class InternalEntriesComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  public searchFilters : General;

  ngOnInit() : void {

  	let data = this.route.snapshot.data;

  	this.systemType = data.entries.systemType;

  	this.title = data.entries.title;

  	this.view = data.entries.view;

  	this.viewWord = data.entries.viewWord;

  	this.link = data.entries.link;

    this.$link = data.entries.$link;

  	this.searchFilters = data.entries.searchFilters;
  
  }

}
