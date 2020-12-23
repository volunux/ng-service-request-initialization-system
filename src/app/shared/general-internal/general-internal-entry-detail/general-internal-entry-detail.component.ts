import { Component , Input , OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap , Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { GeneralInternal } from '../general-internal';

import { General } from '../../interfaces/general';

import { GeneralInternalService } from '../general-internal.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

@Component({

  'selector' : 'app-general-internal-entry-detail',

  'templateUrl' : './general-internal-entry-detail.component.html',

  'styleUrls' : ['./general-internal-entry-detail.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class GeneralInternalEntryDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private ems : ErrorMessagesService ,

  						private gis : GeneralInternalService ) { 

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public entry : GeneralInternal;

  public error : General | null | boolean = false;

  ngOnInit() : void {

  	this.gis.$systemType = this.systemType;

  	this.gis.$sa = this.$link;

    this.route.paramMap.pipe(

    	switchMap((params : ParamMap) => { let $e = +params.get('entry');

    			return this.gis.getEntry($e);	})
    	)
        .subscribe(($entry) => { 

        if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

          this.entry = $entry;  });
  }

}
