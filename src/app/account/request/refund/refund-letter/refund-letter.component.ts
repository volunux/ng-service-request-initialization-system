import { Component , OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { RefundService } from '../refund.service';

import { General } from '../../general';

import { GeneralRequest } from '../../request';

import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

import { NotificationService } from '../../../../shared/services/notification.service';

@Component({

  'selector' : 'app-refund-letter',

  'templateUrl' : './refund-letter.component.html',

  'styleUrls' : ['./refund-letter.component.css'] ,

  'providers' : [ErrorMessagesService]

})
export class RefundLetterComponent implements OnInit {

  constructor(private route : ActivatedRoute , private grs : RefundService , public ems : ErrorMessagesService ,) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  public entry : GeneralRequest;

  public error : General | null | boolean = false;

  private entrySlug : string = '';

  ngOnInit() : void {

    let data = this.route.snapshot.data;

        this.systemType = data.letter.systemType;

        this.title = data.letter.title;

        this.view = data.letter.view;    

        this.viewWord = data.letter.viewWord;

        this.link = data.letter.link;

        this.$link = data.letter.$link;

        this.grs.$systemType = this.systemType;

        this.grs.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { let $e = params.get('entry');

            return this.grs.getEntryLetter($e);  })
        )
          .subscribe(($entry : GeneralRequest) => {

              if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

              this.error = null;

              this.entry = $entry;

              this.entrySlug = this.entry.slug;  });
    
  }

}
