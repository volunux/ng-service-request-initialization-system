import { Component , Input , OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup , FormControl } from '@angular/forms';

import { General } from '../../interfaces/general';

import { GeneralInternalOther } from '../general-internal-other';

import { GeneralInternalService } from '../general-internal.service';

import { GeneralInternalFormService } from '../general-internal-form.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

@Component({

  'selector' : 'app-general-internal-entry-create',

  'templateUrl' : './general-internal-entry-create.component.html',

  'styleUrls' : ['./general-internal-entry-create.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class GeneralInternalEntryCreateComponent implements OnInit {

  constructor(private router : Router , private gis : GeneralInternalService , private ns : NotificationService ,

              private gifs : GeneralInternalFormService , private ems : ErrorMessagesService) { 

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input('system-guideline') public systemGuideline : string;

  @Input('control-filters') public controlFilters : string[];

  @Input('no-edit') public noEdit : boolean;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  @Input() public placeholder : { [key : string] : string };

  public error : General | null | boolean = false;

  public formSubmitted : boolean = false;

  public fip : string = 'block';

  public submission : boolean = false;

  public entryForm : FormGroup;

  public generalOthers : General;

  ngOnInit() : void {

  	this.gis.$systemType = this.systemType;

  	this.gis.$sa = this.$link;

    this.gis.addEntry()

    .subscribe((data : General) => {

      if (!data) { return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);	}

      if (data.permitted) { this.entryForm = this.gifs.$entryForm();

    												this.gifs.removeControls(this.controlFilters , this.entryForm);	}

      if (Object.keys(data.$data).length > 0) { 

        this.generalOthers = GeneralInternalOther.processEntries(data.$data);

        this.gifs.createPermanent(data , this.entryForm);  }  });
  }

  public addEntry(entry : General) {

   this.submission = true;

    this.formSubmitted = true;

    this.error = null;

    this.fip = 'none';

    this.gis.$addEntry(entry)

      .subscribe(($entry : General) => {

        if (!$entry) { this.formSubmitted = false;

          this.fip = 'block';

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`);  }

       else if ($entry && $entry.created) { this.formSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);

          return this.$entryChanges($entry.$data);  }   });

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

  get name() : FormControl {

      return this.entryForm.get('name') as FormControl;
  }

  get num() : FormControl {

    return this.entryForm.get('num') as FormControl;
  }

  get description() : FormControl {

    return this.entryForm.get('description') as FormControl;
  }

  get shortCode() : FormControl {

    return this.entryForm.get('shortCode') as FormControl;
  }

  get status() : FormControl {

    return this.entryForm.get('status') as FormControl;
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
