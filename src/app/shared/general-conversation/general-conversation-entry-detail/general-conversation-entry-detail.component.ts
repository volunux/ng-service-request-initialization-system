import { Component , Input , OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap , Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { GeneralConversation } from '../general-conversation';

import { General } from '../../interfaces/general';

import { GeneralConversationService } from '../general-conversation.service';

import { ErrorMessagesService } from '../../services/error-messages.service';


@Component({

  'selector' : 'app-general-conversation-entry-detail',

  'templateUrl' : './general-conversation-entry-detail.component.html',

  'styleUrls' : ['./general-conversation-entry-detail.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class GeneralConversationEntryDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private ems : ErrorMessagesService ,

  						private gcs : GeneralConversationService) { 

  }

  @Input('system-type') public systemType : string;
  
  @Input('view-word') public viewWord : string;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public entry : GeneralConversation;

  public error : General | null | boolean = false;

  ngOnInit() : void {

  	this.gcs.$systemType = this.systemType;

  	this.gcs.$sa = this.$link;

    this.route.paramMap.pipe(

    	switchMap((params : ParamMap) => { let $e = params.get('entry');

    			return this.gcs.getEntry($e);	})
    	)
        .subscribe(($entry) => { 

        if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

          this.entry = $entry;  });
  }

}
