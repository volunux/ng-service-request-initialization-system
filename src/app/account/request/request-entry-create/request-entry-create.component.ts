import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { General } from '../general';

@Component({

  'selector' : 'app-request-entry-create',

  'templateUrl' : './request-entry-create.component.html',

  'styleUrls' : ['./request-entry-create.component.css']

})

export class RequestEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  public systemGuideline : string;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

        this.systemType = data.create.systemType;

        this.title = data.create.title;

        this.view = data.create.view;

        this.viewWord = data.create.viewWord;

        this.link = data.create.link;

        this.$link = data.create.$link;

        this.systemGuideline = data.create.systemGuideline;
  
  }

}
