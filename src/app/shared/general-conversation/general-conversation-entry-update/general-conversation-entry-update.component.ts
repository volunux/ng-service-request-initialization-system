import { Component , Input , OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap , Router } from '@angular/router';

import { FormGroup , FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { switchMap } from 'rxjs/operators';

import { GeneralConversation } from '../general-conversation';

import { General } from '../../interfaces/general';

import { GeneralConversationService } from '../general-conversation.service';

import { GeneralConversationFormService } from '../general-conversation-form.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';


@Component({

  'selector' : 'app-general-conversation-entry-update',

  'templateUrl' : './general-conversation-entry-update.component.html',

  'styleUrls' : ['./general-conversation-entry-update.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class GeneralConversationEntryUpdateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private gcs : GeneralConversationService , private gcfs : GeneralConversationFormService ,

  						private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

  @Input('system-type') public systemType : string;

	@Input('view-word') public viewWord : string;

	@Input('control-filters') public controlFilters : string[];

  @Input('no-edit') public noEdit : boolean;

	@Input() public title : string;

	@Input() public view : string;

	@Input() public link : string;

	@Input() public $link : string;

	public entry : GeneralConversation;

	public formModified : boolean = false;

	public formMessage : string = 'Form will not be submitted and entry will not be updated if data are unchanged since when they were retrieved from the database.';

	private entryIdx : string = '';

	public formSubmitted : boolean = false;

	public error : General | null | boolean = false;

  public fip : string = 'block';

  public entryForm : FormGroup;

  ngOnInit() : void {

  	this.gcs.$systemType = this.systemType;

  	this.gcs.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { let $e = params.get('entry');

          	return this.gcs.updateEntry($e);  })
        
        )
      .subscribe((data : General) => {

					if (!data) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

					this.entry = data.$data;

          if (data.$data[this.systemType]) this.entry = data.$data[this.systemType];

					this.entryIdx = this.entry._id;

    			this.entryForm = this.gcfs.$entryForm();

					this.gcfs.removeControls(this.controlFilters , this.entryForm);

					this.entryForm.patchValue(this.entry);	 });
	}


	
	public updateEntry($entry : GeneralConversation) : any {

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

		this.gcs.$updateEntry(this.entryIdx , $entry)

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

	public canDeactivate(): Observable<boolean> | boolean {

  if (false) {
    
    return true;
  }	

  else { return true; }

}

  get text() : FormControl {

      return this.entryForm.get('text') as FormControl;
  }

  get entrySlug() : FormControl {

    return this.entryForm.get('entrySlug') as FormControl;
  }

  get status() : FormControl {

    return this.entryForm.get('status') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }
}
