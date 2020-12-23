import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { General } from '../../general';

@Component({

  'selector' : 'app-internal-entry-delete',

  'templateUrl' : './internal-entry-delete.component.html',

  'styleUrls' : ['./internal-entry-delete.component.css']

})

export class InternalEntryDeleteComponent implements OnInit {

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

  public controlsDisabled : string[];

  public noEdit : boolean;

  public placeholder : { [key : string] : string };

  ngOnInit() : void {

  	let data = this.route.snapshot.data;

  	this.systemType = data.delete.systemType;

  	this.viewWord = data.delete.viewWord;

  	this.systemGuideline = data.delete.systemGuideline;

  	this.title = data.delete.title;

  	this.view = data.delete.view;

  	this.link = data.delete.link;

  	this.$link = data.delete.$link;

  	this.controlFilters = data.delete.controlFilters;

    this.controlsDisabled = data.delete.controlsDisabled;

  	this.noEdit = data.delete.noEdit;

    this.placeholder = data.delete.placeholder;
  
  }

}
