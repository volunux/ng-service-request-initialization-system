import { Component, OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { User } from '../user';

import { General } from '../general';

import { UserService } from '../user.service';

import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-user-detail',

  'templateUrl' : './user-detail.component.html',

  'styleUrls' : ['./user-detail.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class UserDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private ems : ErrorMessagesService , private us : UserService ) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  public entry : User;

  public error : General | null | boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.detail.systemType;

    this.title = data.detail.title;

    this.view = data.detail.view;

    this.viewWord = data.detail.viewWord;

    this.link = data.detail.link;

    this.$link = data.detail.$link;

    this.us.$systemType = this.systemType;

    this.us.$sa = this.$link;

    this.route.paramMap.

      pipe(
            switchMap((params : ParamMap) => { let $e = params.get('entry');

                return this.us.getUser($e);  })
        )
          .subscribe(($entry : User) => {

          if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

          this.entry = $entry;  })

  }

}
