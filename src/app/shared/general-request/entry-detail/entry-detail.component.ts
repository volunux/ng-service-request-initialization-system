import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { General } from '../general';

import { $entryUpdateRole } from '../roles';

import { GeneralRequest } from '../request';

import { GeneralRequestService } from '../general-request.service';

import { GeneralRequestFormService } from '../general-request-form.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

import { AuthenticationService } from '../../../authentication/authentication.service';

@Component({

  'selector' : 'app-entry-detail',

  'templateUrl' : './entry-detail.component.html',

  'styleUrls' : ['./entry-detail.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class EntryDetailComponent implements OnInit {

  constructor(public router : Router , private route : ActivatedRoute , public grs : GeneralRequestService , 

  						public ns : NotificationService , public grfs : GeneralRequestFormService , public ems : ErrorMessagesService ,

  						private as : AuthenticationService) {

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input('generate-cred') public generateCred : string;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public entry : GeneralRequest;

  public error : General | null | boolean = false;

  private entrySlug : string = '';

  public formSubmitted : boolean = false;

  public setEntryOnReview : boolean = false;

  public fip : string = 'block';

  public entryForm : FormGroup;

  ngOnInit() : void {

    this.grs.$systemType = this.systemType;

    this.grs.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { let $e = params.get('entry');

          	return this.grs.getEntry($e);  })
        )
          .subscribe(($entry : GeneralRequest) => {

    					if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

    					this.entry = $entry;

    					this.entrySlug = this.entry.slug;

    					this.entryForm = this.grfs.entryUpdateForm(); 

              switch(this.generateCred) {

                  case 'passwords' :
                  this.grfs.removeControls(['requestUsername'] , this.entryForm);
                  break;

                  case 'csif':
                  break;

                  default:
                  this.grfs.removeControls(['requestUsername' , 'requestPassword'] , this.entryForm);  }    });
  }

  public updateEntry($entry : GeneralRequest) : any {

		this.error = null;

		this.fip = 'none';

		this.formSubmitted = true;

		this.grs.$updateEntry(this.entrySlug , $entry)

			.subscribe(($entry : General) => {

				if (!$entry) { this.formSubmitted = false;

					this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`);

					return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

				if ($entry && $entry.updated) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated.`);

					return this.$entryChanges($entry.$data);	}	});
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['request' , this.link , 'entries']);  } , 5000) 
  }

  public $confirmEntryOnReview() {

    if (this.setEntryOnReview) return false;

  	this.setEntryOnReview = true;

  	this.grs.$confirmEntryOnReview(this.entry.slug)

			.subscribe(($entry : General) => {

				if (!$entry) { this.setEntryOnReview = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`);

					return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

				if ($entry && $entry.onReview) { this.setEntryOnReview = false;

					this.entry.status = $entry.$data.status;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated and on review.`);		}	});		
  }

  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

  get userRole() : string {

  	return this.as.userRole;
  }

  get canUpdateEntry() : boolean {

  	return $entryUpdateRole.indexOf(this.userRole) > -1;
  }

  get isFormValid() : boolean {

  	return this.entryForm.valid;
  }

  get text() : FormControl {

  	return this.entryForm.get('text') as FormControl;
  }

  get status() : FormControl {

  	return this.entryForm.get('status') as FormControl;
  }

  get requestUsername() : FormControl {

    return this.entryForm.get('requestUsername') as FormControl;
  }

  get requestPassword() : FormControl {

    return this.entryForm.get('requestPassword') as FormControl;
  }

   public removeNotification() : void {

     this.ns.removeNotification();
   }

}
