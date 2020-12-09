import { Component , Input , OnInit } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { General } from '../../interfaces/general';

import { GeneralRequestOther } from '../request-others';

import { $entryUpdateRole } from '../roles';

import { GeneralRequest } from '../request';

import { AuthenticationService } from '../../../authentication/authentication.service';

import { GeneralRequestService } from '../general-request.service';

import { GeneralRequestFormService } from '../general-request-form.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

@Component({

  'selector' : 'app-entry-transfer',

  'templateUrl' : './entry-transfer.component.html',

  'styleUrls' : ['./entry-transfer.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class EntryTransferComponent implements OnInit {

  constructor(public router : Router , private route : ActivatedRoute , public grs : GeneralRequestService , 

  						public ns : NotificationService , public grfs : GeneralRequestFormService , public ems : ErrorMessagesService ,

  						private as : AuthenticationService) {

  }
  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public entry : GeneralRequest;

  public entryOthers : any;

  public error : General | null | boolean = false;

	private entrySlug : string = '';

	public formSubmitted : boolean = false;

  public fip : string = 'block';

  public transferForm : FormGroup;

  ngOnInit() : void {

    this.grs.$systemType = this.systemType;

    this.grs.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { let $e = params.get('entry');

          	return this.grs.transferEntry($e);  })
        )
		      .subscribe(($entry : General) => {

							if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

							this.entry = $entry.$data[this.viewWord];

							this.entrySlug = this.entry.slug;

							this.entryOthers = $entry.general ? new GeneralRequestOther($entry.general) : {};

							this.transferForm = this.grfs.$entryTransferForm();

		          this.grfs.createPermanent($entry.general , this.transferForm);	});
  }

  ngOnDestroy() {

  }

  public updateEntry($entry : GeneralRequest) : any {

		this.error = null;

		this.fip = 'none';

		this.formSubmitted = true;

		this.grs.$transferEntry(this.entrySlug , $entry)

			.subscribe(($entry : General) => {

				if (!$entry) { this.formSubmitted = false;

					this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`);

					return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

				if ($entry && $entry.updated) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated and transferred.`);

					return this.$entryChanges($entry.$data);	}	});		
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['request' , this.link , 'entries']);  } , 5000) 
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

  get isFormValid() : boolean {

  	return this.transferForm.valid;
  }

  get canUpdateEntry() : boolean {

  	return $entryUpdateRole.indexOf(this.userRole) > -1;
  }

  get text() : FormControl {

  	return this.transferForm.get('text') as FormControl;
  }

  get unit() : FormControl {

  	return this.transferForm.get('unit') as FormControl;
  }

   public removeNotification() : void {

     this.ns.removeNotification();
   }

}
