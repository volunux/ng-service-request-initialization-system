import { Component , OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute , ParamMap , Router  } from '@angular/router';

import { RequestCredentialService } from '../request-credential.service';

import { SearchQueryService } from '../request-credential-search-query.service';

import { RequestCredentialFormService } from '../request-credential-form.service';

import { General } from '../general';

import { RequestCredential } from '../request-credential';

import { Subject } from 'rxjs';

import { debounceTime , distinctUntilChanged , mergeMap } from 'rxjs/operators';

import { ErrorMessagesService } from '../../../../general/error-messages.service';

import { SearchQuery } from '../../../../general/search-query';

import { NotificationService } from '../../../../general/notification.service';

@Component({

  'selector' : 'app-request-credential-list',

  'templateUrl' : './request-credential-list.component.html',

  'styleUrls' : ['./request-credential-list.component.css']

})

export class RequestCredentialListComponent implements OnInit {

  public title : string = 'Request Credential Entries';

  public requestCredentials : RequestCredential[] = [];

  public error : General | null | boolean = false;

  public systemType : string = 'Request Credential';

  public rcdl : string[] = [];

  public searchQuery : SearchQuery = {};

  public pageNumber : number = 1;

  public requestCredentialsLength : number = 0;

  public entrySearching : boolean = false;

  public refreshing : boolean;

  public requestRef : any;

  public entriesSearched : boolean;

  private searchFilters = ['username' , 'status'];

  public searchCtrl = this.rcfs.searchForm();

  constructor(private route : ActivatedRoute , private router : Router , private location : Location , private rcfs : RequestCredentialFormService ,

              private rcs : RequestCredentialService , private ss : SearchQueryService , private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

  public validSearch(qt) {

    return this.searchFilters.indexOf(qt) < 0;
  }

  public searchTerm : Subject<SearchQuery> = new Subject<SearchQuery>();

  public searchEntry(qt : string , qv : string) : boolean | void {

    if (!qt.trim() || (this.searchFilters.indexOf(qt) < 0)) { return false; }

    this.entrySearching = true;

    this.searchQuery = { [qt] : qv };

    this.searchTerm.next(this.searchQuery);

  }

  public trackById(idx : number , requestCredential : RequestCredential) : string {

      return requestCredential._id;
  }

  ngOnInit() : void {

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let whichPage = params.get('page') , whichRef = params.get('name');

       this.requestRef = whichRef ? true : 0;

       this.pageNumber = +whichPage ? +whichPage : 1;

      let paramsRegister = params , paramKeys = paramsRegister.keys , paramsObject = {}

      for (let key of paramKeys) { let param = paramsRegister.get(key);

        if (param) paramsObject[key] = param }

      if (Object.keys(this.searchQuery).length) paramsObject = {...paramsObject , ...this.searchQuery };

        this.getRequestCredentials(paramsObject);

   })

    this.searchTerm.pipe(

      debounceTime(3000) ,

      distinctUntilChanged() ,

      mergeMap((value) => { return this.ss.searchTerms<RequestCredential[]>(value , 'request-credential' , 'Request Credential Entries' , []); })  )

    .subscribe((requestCredentials : RequestCredential[]) => { 

      this.entrySearching = false;

      this.refreshing = false;

      this.entriesSearched = true;

      this.location.replaceState('/request-credential/entries');

      this.pageNumber = 1

      if (requestCredentials.length < 1) { this.requestCredentialsLength = requestCredentials.length;

        return this.error = Object.assign({'resource' : 'Request Credential Entry or Entries'} , this.ems.message);  }

      this.requestCredentialsLength = requestCredentials.length;

      this.requestCredentials = requestCredentials;

      if (this.requestCredentials.length <= 10) this.pageNumber = 1;

      if (this.requestCredentials.length > 10) this.requestCredentials.pop();  });

  }

  public backToTop() : void {

      window.scrollTo(0 , 0);
  }

  public getRequestCredentials(sq : SearchQuery) {

   this.rcs.getRequestCredentials(sq)
  
    .subscribe((requestCredentials : RequestCredential[]) => {

       this.refreshing = false;

      if (requestCredentials.length < 1) { return this.error = Object.assign({'resource' : 'Request Credential Entry or Entries'} , this.ems.message) }

         this.error = null;

         this.requestCredentialsLength = requestCredentials.length;

         this.requestCredentials = requestCredentials;

      if (this.requestCredentials.length > 10) this.requestCredentials.pop();  });
  }

  public clearSearch() : void {

    this.searchQuery = {};

    this.entriesSearched = false;

    this.error = null;

    this.refreshing = true;

    this.pageNumber = 1;

    this.location.replaceState('/system/internal/request-credential/entries');

    this.getRequestCredentials({});  }


  public addRequestCredentialToDeleteList(rcidx : number , checked : boolean , idx : number) : void {

  if (checked) { this.rcdl.push(rcidx);  }

  else if (!checked && this.rcdl.indexOf(rcidx) > -1) {

    this.rcdl = this.rcdl.filter((id) => { let finalId = id != rcidx;

      if (finalId) return '' + finalId;

      return false;  })  }   }

  public deleteManyRequestCredential() : void | boolean { let confirmDeletion = confirm('Are you sure you want to perform this action?');

      if (confirmDeletion) {

        this.rcs.$deleteManyRequestCredential(this.rcdl)

        .subscribe((val) => { this.requestCredentials = this.requestCredentials.filter((requestCredential , idx) => {

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is successful and many Request Credentials is deleted.'); 

           return this.rcdl.indexOf(requestCredential.num) < 0;  })  } ,

            (error) => { 

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is unsuccessful and many Request Credentials is not deleted.');   } )  }

          else {  return false;  }
  }

   get search() {

    return this.searchCtrl;
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


}
