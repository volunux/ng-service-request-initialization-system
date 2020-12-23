import { Component , Input , OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { FormControl } from '@angular/forms';

import { Subject } from 'rxjs';

import { debounceTime , distinctUntilChanged , switchMap } from 'rxjs/operators';

import { General } from '../../../../shared/interfaces/general';

import { SearchQuery } from '../../../../shared/interfaces/search-query';

import { User } from '../user';

import { UserService } from '../user.service';

import { UserFormService } from '../user-form.service';

import { GeneralSearchService } from '../../../../shared/services/general-search.service';

import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

import { NotificationService } from '../../../../shared/services/notification.service';

@Component({

  'selector' : 'app-user-list',

  'templateUrl' : './user-list.component.html',

  'styleUrls' : ['./user-list.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService , GeneralSearchService]

})

export class UserListComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private location : Location , private ufs : UserFormService ,

              private us : UserService , private grss : GeneralSearchService , private ems : ErrorMessagesService , private ns : NotificationService ) { 

  }

  public systemType : string;

  public viewWord : string;

  public searchFilters : General;

  public title : string;

  public view : string;

  public link : string;

  public link2 : boolean;

  public $link : string;

  public entries : User[] = [];

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

    this.entriesSearched = false;

    if (!qt.trim() || (Object.keys(this.searchFilters).indexOf(qt) < 0)) { return false; }

    this.entrySearching = true;

    this.searchQuery = { [qt] : qv };

    this.searchTerm.next(this.searchQuery);

  }


  public trackByName(idx : number , entry : User) : string {

      return entry._id;
  }

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.entries.systemType;

    this.title = data.entries.title;

    this.view = data.entries.view;

    this.viewWord = data.entries.viewWord;

    this.link = data.entries.link;

    this.link2 = data.link2;

    this.$link = data.entries.$link;

    this.searchFilters = data.entries.searchFilters;

    this.searchCtrl = this.ufs.searchForm(this.searchFilters);

    this.us.$systemType = this.systemType;

    this.us.$sa = this.$link;

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

      switchMap((query : SearchQuery) => { return this.grss.searchTerms<User[]>(query , this.$link , `${this.systemType} Entries` , []); })  )

    .subscribe(($entries : User[]) => { 

      this.entrySearching = false;

      this.refreshing = false;

      this.entriesSearched = true;

      this.location.replaceState(`/system/internal/${this.link}/entries`);

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

  public getAllEntry(sq : SearchQuery) {

   this.us.getAllEntry(sq , this.link2)
  
    .subscribe(($entries : User[]) => {

       this.refreshing = false;

      if ($entries.length < 1) {

        this.entries = [];

        this.$entriesLength = $entries.length;

        return this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message);  }

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

    this.location.replaceState(`/system/internal/${this.link}/entries`);

    this.getAllEntry({});  }


  public addEntryToDeleteList(gridx : number , checked : boolean , idx : number) : void {

  if (checked) { if (gridx) this.esdl.push(gridx);  }

  else if (!checked && this.esdl.indexOf(gridx) > -1) {

    this.esdl = this.esdl.filter((id) => { let finalId = id != gridx;

      if (finalId) return '' + finalId;

      return false;  });  }   }


    public deleteManyEntry() : void | boolean { let confirmDeletion = confirm('Are you sure you want to perform this action?');

      if (confirmDeletion) {

        if (this.p$esdl) return false;

        this.p$esdl = true;

        this.us.$deleteManyEntry(this.esdl)

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
