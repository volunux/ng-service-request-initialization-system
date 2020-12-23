import { Component , Input , OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap , Router } from '@angular/router';

import { FormGroup , FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { switchMap } from 'rxjs/operators';

import { RequestLimit } from '../request-limit';

import { General } from '../../general';

import { RequestLimitService } from '../request-limit.service';

import { RequestLimitFormService } from '../request-limit-form.service';

import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

import { NotificationService } from '../../../../shared/services/notification.service';

@Component({

  'selector' : 'app-request-limit-entry-update',

  'templateUrl' : './request-limit-entry-update.component.html',

  'styleUrls' : ['./request-limit-entry-update.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService]

})

export class RequestLimitEntryUpdateComponent implements OnInit {
  
  constructor(private route : ActivatedRoute , private router : Router , private rls : RequestLimitService , private rlfs : RequestLimitFormService ,

  						private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

  public systemType : string;

	public viewWord : string;

	public controlFilters : string[];

  public noEdit : boolean;

	public title : string;

	public view : string;

	public link : string;

	public $link : string;

  public placeholder : { [key : string] : string };

	public entry : RequestLimit;

	public formModified : boolean = false;

	public formMessage : string = 'Form will not be submitted and entry will not be updated if data are unchanged since when they were retrieved from the database.';

	private entryIdx : string = '';

	public formSubmitted : boolean = false;

	public error : General | null | boolean = false;

  public fip : string = 'block';

  public entryForm : FormGroup;

  ngOnInit() : void {

  	let data = this.route.snapshot.data;

  	this.systemType = data.update.systemType;

  	this.title = data.update.title;

  	this.view = data.update.view;

  	this.viewWord = data.update.viewWord;

  	this.link = data.update.link;

  	this.$link = data.update.$link;

  	this.controlFilters = data.update.controlFilters;

  	this.noEdit = data.update.noEdit;

    this.placeholder = data.update.placeholder;

  	this.rls.$systemType = this.systemType;

  	this.rls.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { let $e = params.get('entry');

          	return this.rls.updateEntry($e);  })
        
        )
      .subscribe((data : General) => {

					if (!data) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

					this.entry = data.$data;

          if (data.$data[this.systemType]) this.entry = data.$data[this.systemType];

					this.entryIdx = this.entry._id;

    			this.entryForm = this.rlfs.$entryForm();

					this.rlfs.removeControls(this.controlFilters , this.entryForm);

          this.entry.author = this.entry.author._id;

					this.entryForm.patchValue(this.entry);  });
	}


	
	public updateEntry($entry : RequestLimit) : any {

		this.error = null;

    this.fip = 'none';

		for (let chrs in this.entry) {

				if((this.entry[chrs] != $entry[chrs] && ($entry[chrs] !== null && $entry[chrs] !== undefined))) { 

					this.formModified = true;

					break;	}	}

     let $$entry = Object.keys(this.entry);

     let $$$entry = Object.keys($entry);

    const found = $$$entry.some((r) => {
      
        if (!($$entry.indexOf(r) > -1)) {

            this.formModified = true;  }  })

		if (this.formModified) {

			this.formSubmitted = true;

		this.rls.$updateEntry(this.entryIdx , $entry)

			.subscribe(($entry : General) => {

				if (!$entry) { this.formSubmitted = false;

					this.fip = 'block';

					this.formModified = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`);

					return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

				if ($entry && $entry.updated) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is updated.`);

					return this.$entryChanges($entry.$data);	}	});		}

		else { 

			this.fip = 'block';

			return false;	}

	}

   public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(data && data.num ? 

        ['system' , 'internal' , this.link , 'entries'] : ['system' , 'internal' , this.link , 'entries']);  } 

      , 5000) 
  }

  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

   public removeNotification() : void {

     this.ns.removeNotification();
   }

  get _id() : FormControl {

      return this.entryForm.get('_id') as FormControl;
  }

  get author() : FormControl {

      return this.entryForm.get('author') as FormControl;
  }

  get numberRemaining() : FormControl {

      return this.entryForm.get('numberRemaining') as FormControl;
  }

  get status() : FormControl {

    return this.entryForm.get('status') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }

}
