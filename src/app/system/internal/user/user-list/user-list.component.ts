import { Component , Input , OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { General } from '../../../../shared/interfaces/general';

import { SearchQuery } from '../../../../shared/interfaces/search-query';

import { User } from '../user';

import { UserService } from '../user.service';

import { UserAccountFormService } from '../../../../shared/user-account/user-account-form.service'; 

import { GeneralSearchService } from '../../../../shared/services/general-search.service';

import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

import { NotificationService } from '../../../../shared/services/notification.service';

import { GeneralAllService } from '../../../../shared/general-all/general-all.service';

import { listAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-user-list',

  'templateUrl' : './user-list.component.html',

  'styleUrls' : ['./user-list.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService , GeneralSearchService , GeneralAllService] ,

  'animations' : [listAnimation]

})

export class UserListComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private location : Location ,

              private ufs : UserAccountFormService , private us : UserService , private gss : GeneralSearchService ,

              private gas : GeneralAllService , private ems : ErrorMessagesService , private ns : NotificationService ) { 

    this.gss.entriesSearched$.subscribe(($entries : User[]) => {

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

    this.gss.clearSearch$.subscribe((val) => {

      this.clearSearch$();  });

    this.gss.errorExist$.subscribe((val) => {

      this.error = val;  });

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

  public $entryRef : any;



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

    this.us.$systemType = this.systemType;

    this.us.$sa = this.$link;

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let paramsObject = this.gas.paramProcessor(params , this)

        return this.getAllEntry(paramsObject);  });

  }

  public getAllEntry(sq : SearchQuery) {

   this.us.getAllEntry(sq , this.link2)
  
    .subscribe(($entries : User[]) => {

      if ($entries.length < 1) {

        this.entries = [];

        this.$entriesLength = $entries.length;

        return this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message);  }

         this.error = null;

         this.$entriesLength = $entries.length;

         this.entries = $entries;

      if (this.entries.length > 10) this.entries.pop();  });
  }


  public searchErr$(err) {

    this.error = null;
  }

  public clearSearch$() : void {

    this.error = null;

    this.pageNumber = 1;

    this.location.replaceState(`/system/internal/${this.link}/entries`);

    this.gss.searchCleared.next(true);

    this.getAllEntry({});  }



  public addEntryToDeleteList(gridx : number , checked : boolean , idx : number) : void {

    return this.gas.addEntryToDeleteList(gridx , checked , idx , this);  }


    public deleteManyEntry() : void | boolean {

       return this.gas.deleteManyEntry(this);  }

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
