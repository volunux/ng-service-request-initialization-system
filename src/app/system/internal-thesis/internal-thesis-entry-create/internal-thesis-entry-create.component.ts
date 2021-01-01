import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({

  'selector' : 'app-internal-thesis-entry-create',

  'templateUrl' : './internal-thesis-entry-create.component.html',

  'styleUrls' : ['./internal-thesis-entry-create.component.css']

})

export class InternalThesisEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  public systemType : string;

  public viewWord : string;

  public systemGuideline : string; 

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public controlFilters : string[];

  public noEdit : boolean;

  public placeholder : { [key : string] : string };

  public attachmentName : string;

  public attachmentType : string;

  ngOnInit() : void {

  	let data = this.route.snapshot.data;

  	this.systemType = data.create.systemType;

  	this.viewWord = data.create.viewWord;

  	this.systemGuideline = data.create.systemGuideline;

  	this.title = data.create.title;

  	this.view = data.create.view;

  	this.link = data.create.link;

  	this.$link = data.create.$link;

  	this.controlFilters = data.create.controlFilters;

  	this.noEdit = data.create.noEdit;

    this.placeholder = data.create.placeholder;

    this.attachmentName = data.create.attachmentName;

    this.attachmentType = data.create.attachmentType;
  
  }

}
