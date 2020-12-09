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

  'providers' : [NotificationService , ErrorMessagesService]

})
export class RefundLetterComponent implements OnInit {

  constructor(private route : ActivatedRoute , private grs : RefundService , public ns : NotificationService , public ems : ErrorMessagesService ,) { 

  }

  public systemType : string = 'Refund';

  public title : string = `${this.systemType} Letter`;

  public view : string = 'rf';

  public viewWord : string = 'Refund';

  public link : string = 'refund';

  public $link : string = this.link;

  public entry : GeneralRequest;

  public error : General | null | boolean = false;

  private entrySlug : string = '';

  ngOnInit(): void {

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { let $e = params.get('entry');

            return this.grs.getEntryLetter($e);  })
        )
          .subscribe(($entry : GeneralRequest) => {

              if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

              this.entry = $entry;

              this.entrySlug = this.entry.slug;  });
    
  }

}
