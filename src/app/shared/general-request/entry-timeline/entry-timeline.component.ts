import { Component , Input , OnInit } from '@angular/core';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { General } from '../general';

import { GeneralRequest } from '../request';

import { $entryUpdateRole } from '../roles';

import { AuthenticationService } from '../../../authentication/authentication.service';

import { GeneralRequestService } from '../general-request.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';


@Component({

  'selector' : 'app-entry-timeline',

  'templateUrl' : './entry-timeline.component.html',

  'styleUrls' : ['./entry-timeline.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class EntryTimelineComponent implements OnInit {

  constructor(public router : Router , private route : ActivatedRoute , public grs : GeneralRequestService , 

  						public ns : NotificationService , public ems : ErrorMessagesService ,

  						private as : AuthenticationService) {

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public entry : GeneralRequest;

  public comments : General;

  public error : General | null | boolean = false;

  private entrySlug : string = '';

  public fip : string = 'block';

  ngOnInit() : void {

    this.grs.$systemType = this.systemType;

    this.grs.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { let $e = params.get('entry');

          	return this.grs.getTimeline($e);  })
        )

      .subscribe(($entry : GeneralRequest) => {

					if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry Timeline`} , this.ems.message);  }

					this.entry = $entry;

          this.comments = $entry.timeline;

					this.entrySlug = this.entry.slug;		});
  }

  get userRole() : string {

  	return this.as.userRole;
  }

  get canUpdateEntry() : boolean {

    return $entryUpdateRole.indexOf(this.userRole) > -1;
  }

}
