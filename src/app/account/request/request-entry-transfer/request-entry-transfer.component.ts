import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { General } from '../general';

@Component({

  'selector' : 'app-request-entry-transfer',

  'templateUrl' : './request-entry-transfer.component.html',

  'styleUrls' : ['./request-entry-transfer.component.css']

})

export class RequestEntryTransferComponent implements OnInit {

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

        this.systemType = data.transfer.systemType;

        this.title = data.transfer.title;

        this.view = data.transfer.view;

        this.viewWord = data.transfer.viewWord;

        this.link = data.transfer.link;

        this.$link = data.transfer.$link;
  
  }

}
