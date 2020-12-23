import { Component, OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { RequestLimit } from '../request-limit';

import { General } from '../../general';

import { RequestLimitService } from '../request-limit.service';

import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-request-limit-entry-detail',

  'templateUrl' : './request-limit-entry-detail.component.html',

  'styleUrls': ['./request-limit-entry-detail.component.css']

})

export class RequestLimitEntryDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private ems : ErrorMessagesService , private rls : RequestLimitService ) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public link2 : boolean;

  public $link : string;

  public entry : RequestLimit;

  public error : General | null | boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.detail.systemType;

    this.title = data.detail.title;

    this.view = data.detail.view;

    this.viewWord = data.detail.viewWord;

    this.link = data.detail.link;

    this.link2 = data.link2;

    this.$link = data.detail.$link;

    this.rls.$systemType = this.systemType;

    this.rls.$sa = this.$link;

    this.route.paramMap.

      pipe(
            switchMap((params : ParamMap) => { let $e = params.get('entry');

                return this.rls.getEntry($e);  })
        )
          .subscribe(($entry : RequestLimit) => {

          if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

          this.entry = $entry;  })

  }}
