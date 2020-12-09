import { Component , Input , OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { Subject } from 'rxjs';

import { debounceTime , distinctUntilChanged , switchMap } from 'rxjs/operators';

import { FormControl } from '@angular/forms';

import { General } from '../../interfaces/general';

import { SearchQuery } from '../../interfaces/search-query';

import { Payment } from '../payment';

import { GeneralPaymentService } from '../general-payment.service';

import { GeneralPaymentFormService } from '../general-payment-form.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

import { GeneralSearchService } from '../../services/general-search.service';

import { AuthenticationService } from '../../../authentication/authentication.service';

@Component({

  'selector' : 'app-general-payment-entries',

  'templateUrl' : './general-payment-entries.component.html',

  'styleUrls' : ['./general-payment-entries.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService , GeneralSearchService]

})

export class GeneralPaymentEntriesComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private location : Location , private gps : GeneralPaymentService,

  						private gpfs : GeneralPaymentFormService , private gpss : GeneralSearchService , private ems : ErrorMessagesService ,

  						private ns : NotificationService , private as : AuthenticationService) { 

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

  public searchQuery : SearchQuery = {};

  public pageNumber : number = 1;

  public $entriesLength : number = 0;

  public entrySearching : boolean = false;

  public refreshing : boolean = false;

  public $entryRef : any;

  public entriesSearched : boolean = false;

  public searchCtrl : FormControl; 

  public searchTerm : Subject<SearchQuery> = new Subject<SearchQuery>();


  public validSearch(qt) {

    return Object.keys(this.searchFilters).indexOf(qt) < 0;
  }


  public searchEntry(qt : string , qv : string) : boolean | void {

    this.error = null;

    if (!qt.trim() || (Object.keys(this.searchFilters).indexOf(qt) < 0)) { return false; }

    this.entrySearching = true;

    this.searchQuery = { [qt] : qv };

    this.searchTerm.next(this.searchQuery);

  }


  public trackByReference(idx : number , entry : Payment) : string {

      return entry.paymentReference;
  }


  ngOnInit() : void {

    this.searchCtrl = this.gpfs.searchForm(this.searchFilters);

    this.gps.$systemType = this.systemType;

    this.gps.$sa = this.$link;

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let whichPage = params.get('page') , whichRef = params.get('name');

       this.$entryRef = whichRef ? true : 0;

       this.pageNumber = +whichPage ? +whichPage : 1;

      let paramsRegister = params , paramKeys = paramsRegister.keys , paramsObject = {};

      for (let key of paramKeys) { let param = paramsRegister.get(key);

        if (param) paramsObject[key] = param; }

      if (Object.keys(this.searchQuery).length) paramsObject = {...paramsObject , ...this.searchQuery };

        return this.getAllEntry(paramsObject);  });


    this.searchTerm.pipe(

      debounceTime(4000) ,

      distinctUntilChanged() ,

      switchMap((query : SearchQuery) => { return this.gpss.searchTerms<Payment[]>(query , this.$link , `${this.systemType} Entries` , []); })  )

    .subscribe(($entries : Payment[]) => { 

      this.entrySearching = false;

      this.refreshing = false;

      this.entriesSearched = true;

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

  }


  ngOnDestroy() : void {

  }

  public getAllEntry(sq : SearchQuery) {

   this.gps.getAllEntry(sq)
  
    .subscribe(($entries : Payment[]) => {

       this.refreshing = false;

      if ($entries.length < 1) { 

        this.entries = [];

        this.$entriesLength = $entries.length;

        return this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message); }

         this.error = null;

         this.$entriesLength = $entries.length;

         this.entries = $entries;

      if (this.entries.length > 10) this.entries.pop();  });
  }


  public clearSearch() : void {

    this.searchQuery = {};

    this.entriesSearched = false;

    this.error = null;

    this.refreshing = true;

    this.pageNumber = 1;

    this.location.replaceState(`/payment/${this.link}/entries`);

    this.getAllEntry({});  }


  public addEntryToDeleteList(gridx : number , checked : boolean , idx : number) : void {

  if (checked) { this.esdl.push(gridx);  }

  else if (!checked && this.esdl.indexOf(gridx) > -1) {

    this.esdl = this.esdl.filter((id) => { let finalId = id != gridx;

      if (finalId) return '' + finalId;

      return false;  });  }   }


    public deleteManyEntry() : void | boolean { let confirmDeletion = confirm('Are you sure you want to perform this action?');

      if (confirmDeletion) {

        if (this.p$esdl) return false;

        this.p$esdl = true;

        this.gps.$deleteManyEntry(this.esdl)

        .subscribe((val : General) => { 

          this.p$esdl = false;

          this.entries = this.entries.filter((entry) => {

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and many ${this.systemType} Entry is deleted.`); 

           return this.esdl.indexOf(entry.num) < 0;  });

          this.esdl = [];  } ,

            (error : General) => { 

          this.p$esdl = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and many ${this.systemType} Entry is not deleted.`);   } )  }

          else {  return false;  }
  }

   get userRole() : string {

     return this.as.userRole;
   }

  get canUpdateEntry() : boolean {

    return ['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.userRole) > -1;
  }

  get search() : FormControl {

    return this.searchCtrl;
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
