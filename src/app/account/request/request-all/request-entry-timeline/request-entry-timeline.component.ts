import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { General } from '../general';

@Component({

  'selector' : 'app-request-entry-timeline',

  'templateUrl' : './request-entry-timeline.component.html',

  'styleUrls' : ['./request-entry-timeline.component.css']

})

export class RequestEntryTimelineComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

        this.systemType = data.timeline.systemType;

        this.title = data.timeline.title;

        this.view = data.timeline.view;

        this.viewWord = data.timeline.viewWord;

        this.link = data.timeline.link;

        this.$link = data.timeline.$link;
  }

}
