import { Component , OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap } from '@angular/router';

import { User } from '../user';

import { General } from '../general';

import { ProfileService } from '../profile.service';

import { Observable } from 'rxjs';

import { switchMap } from 'rxjs/operators';

import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-profile-detail',
  
  'templateUrl' : './profile-detail.component.html',
  
  'styleUrls' : ['./profile-detail.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class ProfileDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private ems : ErrorMessagesService , private ps : ProfileService ) { 

  }

  public systemType : string = 'User';

  public title : string = `${this.systemType} Detail`;

  public view : string = 'aug';

  public entry : User;

  public error : General | null | boolean = false;

  ngOnInit(): void {

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { return this.ps.profileDetail();  })
        
        )

      .subscribe(($entry : User) => {

					if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

					this.entry = $entry;	});
  }

}
