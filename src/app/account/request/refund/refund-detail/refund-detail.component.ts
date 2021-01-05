import { Component , Input , OnInit , OnDestroy } from '@angular/core';

import { FormControl , FormGroup , Validators } from '@angular/forms';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { General } from '../../general';

import { $entryUpdateRole } from '../../roles';

import { GeneralRequest } from '../../request';

import { RefundService } from '../refund.service';

import { RefundFormService } from '../refund-form.service';

import { AuthenticationService } from '../../../../authentication/authentication.service';

import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

import { NotificationService } from '../../../../shared/services/notification.service';

@Component({

  'selector' : 'app-refund-detail',

  'templateUrl' : './refund-detail.component.html',

  'styleUrls' : ['./refund-detail.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class RefundDetailComponent implements OnInit {

  constructor(public router : Router , private route : ActivatedRoute , public grs : RefundService , 

  						public ns : NotificationService , public grfs : RefundFormService , public ems : ErrorMessagesService ,

  						private as : AuthenticationService) {

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

  public formSubmitted : boolean = false;

  public setEntryOnReview : boolean = false;

  public fip : string = 'block';

  public entryForm : FormGroup;

  public currentStage : number | string;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

      this.systemType = data.detail.systemType;

      this.title = data.detail.title;

      this.view = data.detail.view;

      this.viewWord = data.detail.viewWord;

      this.link = data.detail.link;

      this.$link = data.detail.$link;

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

                if (this.entry.stage && this.entry.stage._id == '1') { 

                  this.currentStage = '2';

                  this.entryForm.patchValue({'stage' : '2'});  }

                if (this.entry.stage && this.entry.stage._id == '2') { 

                  this.currentStage = '3';

                  this.entryForm.patchValue({'stage' : '3'});  }

                if (this.entry.stage && this.entry.stage._id == '3') {

                  this.currentStage = '4';

                  this.entryForm.patchValue({'stage' : '4' , 'text' : 'Content of the Letter'});

                  this.grfs.removeControls(['status' ] , this.entryForm);

                  this.entryForm.addControl('main_body' , new FormControl('' , {'validators' : this.grfs.mainBodyV }));

                  this.entryForm.updateValueAndValidity();

                }

                if (this.entry.stage && this.entry.stage._id == '4') {

                  this.currentStage = '5';

                  this.entryForm.patchValue({'stage' : '5'});

                  this.grfs.removeControls(['status'] , this.entryForm);

                  this.entryForm.updateValueAndValidity();
                }

                if (this.entry.stage && this.entry.stage._id == '5') {

                  this.currentStage = '6';

                  this.entryForm.patchValue({'stage' : '6'});
                }

              });
  }

  ngOnDestroy() {


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

          this.entry.stage = {'_id' : '1'};

          this.currentStage = '2';

          this.entryForm.patchValue({'stage' : '2'});

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

  get canUpdateEntry2() : boolean {

    return ['bursar' , 'moderator' , 'administrator' , 'superAdministrator'].indexOf(this.userRole) > -1; 
  }

  get canUpdateEntry3() : boolean {

    return ['student' , 'departmentPresident' , 'facultyPresident'].indexOf(this.userRole) > -1; 
  }

  get canUpdateEntry4() : boolean {

    return ['hod' , 'dean'].indexOf(this.userRole) > -1; 
  }

  get canUpdateEntry5() : boolean {

    return ['bursar'].indexOf(this.userRole) > -1; 
  }

  get userId() : string {

    return this.as.userId;
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

  get stage() : FormControl {

  	return this.entryForm.get('stage') as FormControl;
  }

  get mainBody() : FormControl {

    return this.entryForm.get('main_body') as FormControl;
  }

   public removeNotification() {

     this.ns.removeNotification();
   }


}
