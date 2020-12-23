import { Component , Input , OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap , Router } from '@angular/router';

import { FormGroup , FormControl } from '@angular/forms';

import { switchMap } from 'rxjs/operators';

import { GeneralInternal } from '../general-internal';

import { General } from '../../interfaces/general';

import { GeneralInternalService } from '../general-internal.service';

import { GeneralInternalFormService } from '../general-internal-form.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

@Component({

  'selector' : 'app-general-internal-entry-delete',

  'templateUrl' : './general-internal-entry-delete.component.html',

  'styleUrls' : ['./general-internal-entry-delete.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class GeneralInternalEntryDeleteComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private ems : ErrorMessagesService ,

              private gis : GeneralInternalService , private gifs : GeneralInternalFormService , private ns : NotificationService) { 

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input('system-guideline') public systemGuideline : string;

  @Input('control-filters') public controlFilters : string[];

  @Input('controls-disabled') public controlsDisabled : string[];

  @Input('no-edit') public noEdit : boolean;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  @Input() public placeholder : { [key : string] : string };

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  private entryIdx : number = 0;

  public fip : string = 'block';

  public submission : boolean = false;

  public entryForm : FormGroup;

  public entry : GeneralInternal;

  ngOnInit() : void {

  	this.gis.$systemType = this.systemType;

  	this.gis.$sa = this.$link;

    this.route.paramMap

      .pipe(

            switchMap((params : ParamMap) => { let $e = params.get('entry');

                return this.gis.deleteEntry(+$e);  })
       )
        .subscribe(($entry : GeneralInternal) => { 

          if (!$entry) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

          this.entryIdx = $entry.num;

          this.entry = $entry;

    			this.entryForm = this.gifs.$entryForm();

          this.gifs.removeControls(this.controlFilters , this.entryForm);

          this.entryForm.patchValue($entry);  }); 
  }

  public deleteEntry($entry : GeneralInternal) {

    let confirmation = confirm('Are you sure you want to proceed with this action?');

    if (!confirmation) return false;

   this.submission = true;

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.gis.$deleteEntry(this.entryIdx)

      .subscribe(($entry : General) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not deleted.`);  }

       else if ($entry && $entry.deleted) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is deleted.`);

          return this.$entryChanges($entry);  }   });
  }

  public $entryChanges(data) {

    return setTimeout(() => {

      return this.router.navigate(['system', 'internal' , this.link , 'entries']);  } , 5000) 
  }


  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

   public removeNotification() {

     this.ns.removeNotification();
   }

  get _id() : FormControl {

      return this.entryForm.get('_id') as FormControl;
  }

  get name() : FormControl {

      return this.entryForm.get('name') as FormControl;
  }

  get shortCode() : FormControl {

    return this.entryForm.get('shortCode') as FormControl;
  }

  get num() : FormControl {

    return this.entryForm.get('num') as FormControl;
  }

  get status() : FormControl {

    return this.entryForm.get('status') as FormControl;
  }

  get description() : FormControl {

    return this.entryForm.get('description') as FormControl;
  }

  get faculty() {

    return this.entryForm.get('faculty') as FormControl;
  }

  get requestUsername() {

    return this.entryForm.get('requestUsername') as FormControl;
  }

  get requestPassword() {

    return this.entryForm.get('requestPassword') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }

}
