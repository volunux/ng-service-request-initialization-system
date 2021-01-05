import { Component , Input , OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { General } from '../../interfaces/general';

import { SearchQuery } from '../../interfaces/search-query';

import { Payment } from '../payment';

import { GeneralPaymentService } from '../general-payment.service';

import { GeneralPaymentFormService } from '../general-payment-form.service';

import { GeneralAllService } from '../../general-all/general-all.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

import { GeneralSearchService } from '../../services/general-search.service';

import { AuthenticationService } from '../../../authentication/authentication.service';

import { listAnimation } from '../../../animations';

@Component({

  'selector' : 'app-general-payment-entries',

  'templateUrl' : './general-payment-entries.component.html',

  'styleUrls' : ['./general-payment-entries.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService , GeneralSearchService , GeneralAllService] ,

  'animations' : [listAnimation]

})

export class GeneralPaymentEntriesComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private location : Location , private gps : GeneralPaymentService,

  						private gpfs : GeneralPaymentFormService , private gss : GeneralSearchService , , private gas : GeneralAllService ,

              private ems : ErrorMessagesService , private ns : NotificationService , private as : AuthenticationService) { 

    this.gss.entriesSearched$.subscribe(($entries : Payment[]) => {

      this.location.replaceState(`/payment/${this.link}/entries`);

      this.pageNumber = 1;

      if ($entries.length < 1) {

        this.entries = [];

        this.$entriesLength = $entries.length;

        return this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message);  }

      this.error = null;

      this.$entriesLength = $entries.length;

      this.entries = $entries;

      if (this.entries.length <= 10) this.pageNumber = 1;

      if (this.entries.length > 10) this.entries.pop();  });

    this.gss.clearSearch$.subscribe((val) => {

      this.clearSearch$();  });

    this.gss.errorExist$.subscribe((val) => {

      this.error = val;  });

  }


  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input('search-filters') public searchFilters : General;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public entries : Payment[] = [];

  public error : General | null | boolean = false;

  public esdl : number[] = [];

  public p$esdl : boolean = false;

  public pageNumber : number = 1;

  public $entriesLength : number = 0;

  public $entryRef : any;


  public searchErr$(err) {

    this.error = null;
  }
  

  public clearSearch$() : void {

    this.error = null;

    this.pageNumber = 1;

    this.location.replaceState(`/payment/${this.link}/entries`);

    this.gss.searchCleared.next(true);

    this.getAllEntry({});  }


  public trackByReference(idx : number , entry : Payment) : string {

      return entry.paymentReference;
  }


  ngOnInit() : void {

    this.gps.$systemType = this.systemType;

    this.gps.$sa = this.$link;

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let paramsObject = this.gas.paramProcessor(params , this)

        return this.getAllEntry(paramsObject);  });
  }

  public getAllEntry(sq : SearchQuery) {

   this.gps.getAllEntry(sq)
  
    .subscribe(($entries : Payment[]) => {

      if ($entries.length < 1) { 

        this.entries = [];

        this.$entriesLength = $entries.length;

        return this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message); }

         this.error = null;

         this.$entriesLength = $entries.length;

         this.entries = $entries;

      if (this.entries.length > 10) this.entries.pop();  });
  }


  public addEntryToDeleteList(gridx : number , checked : boolean , idx : number) : void {

    return this.gas.addEntryToDeleteList(gridx , checked , idx , this);  }


    public deleteManyEntry() : void | boolean {

       return this.gas.deleteManyEntry(this);  }

   get userRole() : string {

     return this.as.userRole;
   }

  get canUpdateEntry() : boolean {

    return ['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.userRole) > -1;
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

}
