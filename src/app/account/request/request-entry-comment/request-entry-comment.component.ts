import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { General } from '../general';

@Component({

  'selector' : 'app-request-entry-comment',

  'templateUrl' : './request-entry-comment.component.html',

  'styleUrls' : ['./request-entry-comment.component.css']

})

export class RequestEntryCommentComponent implements OnInit {

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

        this.systemType = data.comment.systemType;

        this.title = data.comment.title;

        this.view = data.comment.view;  

        this.viewWord = data.comment.viewWord;

        this.link = data.comment.link;

        this.$link = data.comment.$link;
  
  }

}
