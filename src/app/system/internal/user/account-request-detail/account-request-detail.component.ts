import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { User } from '../user';

import { General } from '../general';

import { UserService } from '../user.service';

import { ErrorMessagesService } from '../../../../general/error-messages.service';

@Component({

  'selector' : 'app-account-request-detail',

  'templateUrl' : './account-request-detail.component.html',

  'styleUrls' : ['./account-request-detail.component.css'] ,

})

export class AccountRequestDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private ems : ErrorMessagesService , private us : UserService ) { 

  }

  public title : string = 'Account Request Detail';

  public user : User;

  public error : General | null | boolean = false;

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {

      let entry = params.get('entry');

        this.us.getAcctRequestUser(entry)

          .subscribe((user) => { 

          if (!user) { return this.error = Object.assign({'resource' : 'User Entry'} , this.ems.message);  }

            this.user = user;  }  )   });
  }

}
