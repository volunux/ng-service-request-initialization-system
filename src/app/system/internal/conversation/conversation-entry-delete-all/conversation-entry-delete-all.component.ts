import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({

  'selector' : 'app-conversation-entry-delete-all',

  'templateUrl' : './conversation-entry-delete-all.component.html',

  'styleUrls' : ['./conversation-entry-delete-all.component.css'] ,

})

export class ConversationEntryDeleteAllComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  public systemType : string;

  public viewWord : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.deleteAll.systemType;

    this.viewWord = data.deleteAll.viewWord;

    this.title = data.deleteAll.title;

    this.view = data.deleteAll.view;

    this.link = data.deleteAll.link;

    this.$link = data.deleteAll.$link;
  }


}
