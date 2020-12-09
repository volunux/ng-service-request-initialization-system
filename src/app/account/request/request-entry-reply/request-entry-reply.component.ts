import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { General } from '../general';

@Component({

  'selector' : 'app-request-entry-reply',

  'templateUrl' : './request-entry-reply.component.html',

  'styleUrls' : ['./request-entry-reply.component.css']

})

export class RequestEntryReplyComponent implements OnInit {

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

        this.systemType = data.reply.systemType;

        this.title = data.reply.title;

        this.view = data.reply.view;

        this.viewWord = data.reply.viewWord;

        this.link = data.reply.link;

        this.$link = data.reply.$link;
  
  }

}
