import { Component , Input , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  
  'selector' : 'app-conversation-entry-update',
  
  'templateUrl' : './conversation-entry-update.component.html',
  
  'styleUrls' : ['./conversation-entry-update.component.css'] ,

})

export class ConversationEntryUpdateComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  public systemType : string;

	public viewWord : string;

	public controlFilters : string[];

  public noEdit : boolean;

	public title : string;

	public view : string;

	public link : string;

	public $link : string;

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

	}



}
