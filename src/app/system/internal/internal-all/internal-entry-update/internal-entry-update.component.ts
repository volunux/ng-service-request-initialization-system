import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({

  'selector' : 'app-internal-entry-update',

  'templateUrl' : './internal-entry-update.component.html',

  'styleUrls' : ['./internal-entry-update.component.css']

})

export class InternalEntryUpdateComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  public systemType : string;

	public title : string;

	public view : string;

	public viewWord : string;

	public link : string;

	public $link : string;

	public controlFilters : string[];

	public noEdit : boolean;

  public placeholder : { [key : string] : string };

  ngOnInit() : void {

  	let data = this.route.snapshot.data;

  	this.systemType = data.update.systemType;

  	this.title = data.update.title;

  	this.view = data.update.view;

  	this.viewWord = data.update.viewWord;

  	this.link = data.update.link;

  	this.$link = data.update.$link;

  	this.controlFilters = data.update.controlFilters;

  	this.noEdit = data.update.noEdit;

    this.placeholder = data.update.placeholder;
  
  }

}
