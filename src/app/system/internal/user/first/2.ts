import { Component , OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute , ParamMap , Router  } from '@angular/router';

import { UserService } from '../user.service';

import { SearchQueryService } from '../user-search-query.service';

import { UserFormService } from '../user-form.service';

import { General } from '../general';

import { User } from '../user';

import { Subject } from 'rxjs';

import { debounceTime , distinctUntilChanged , mergeMap } from 'rxjs/operators';

import { ErrorMessagesService } from '../../../../general/error-messages.service';

import { SearchQuery } from '../../../../general/search-query';

import { NotificationService } from '../../../../general/notification.service';

@Component({

  'selector' : 'app-user-list',

  'templateUrl' : './user-list.component.html',

  'styleUrls' : ['./user-list.component.css']

})

export class UserListComponent implements OnInit {

  public title : string = 'User Entries';

  public users : User[] = [];

  public error : General | null | boolean = false;

  public systemType : string = 'User';

  public udl : number[] = [];

  public searchQuery : SearchQuery = {};

  public pageNumber : number = 1;

  public usersLength : number = 0;

  public entrySearching : boolean = false;

  public refreshing : boolean;

  public requestRef : any;

  public entriesSearched : boolean;

  private searchFilters = ['role' , 'emailAddress' , 'level' , 'identityNumber' , 'status' ];

  public searchCtrl = this.ufs.searchForm();

  public view : string = 'ups';

  constructor(private route : ActivatedRoute , private router : Router , private location : Location , private ufs : UserFormService ,

              private us : UserService , private ss : SearchQueryService , private ems : ErrorMessagesService , private ns : NotificationService) { 

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

  public trackByName(idx : number , user : User) : string {

      return user.username;
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

        this.getUsers(paramsObject);

   })

    this.searchTerm.pipe(

      debounceTime(3000) ,

      distinctUntilChanged() ,

      mergeMap((value) => { return this.ss.searchTerms<User[]>(value , 'user' , 'User Entries' , []); })  )

    .subscribe((users : User[]) => { 

      this.entrySearching = false;

      this.refreshing = false;

      this.entriesSearched = true;

      this.location.replaceState('/user/entries');

      this.pageNumber = 1

      if (users.length < 1) { this.usersLength = users.length;

        return this.error = Object.assign({'resource' : 'User Entry or Entries'} , this.ems.message);  }

      this.usersLength = users.length;

      this.users = users;

      if (this.users.length <= 10) this.pageNumber = 1;

      if (this.users.length > 10) this.users.pop();  });

  }

  public backToTop() : void {

      window.scrollTo(0 , 0);
  }

  public getUsers(sq : SearchQuery) {

   this.us.getUsers(sq)
  
    .subscribe((users : User[]) => {

       this.refreshing = false;

      if (users.length < 1) { return this.error = Object.assign({'resource' : 'User Entry or Entries'} , this.ems.message) }

         this.error = null;

         this.usersLength = users.length;

         this.users = users;

      if (this.users.length > 10) this.users.pop();  });
  }

  public clearSearch() : void {

    this.searchQuery = {};

    this.entriesSearched = false;

    this.error = null;

    this.refreshing = true;

    this.pageNumber = 1;

    this.location.replaceState('/system/internal/user/entries');

    this.getUsers({});  }


  public addUserToDeleteList(uidx : number , checked : boolean , idx : number) : void {

  if (checked) { this.udl.push(uidx);  }

  else if (!checked && this.udl.indexOf(uidx) > -1) {

    this.udl = this.udl.filter((id) => { let finalId = id != uidx;

      if (finalId) return '' + finalId;

      return false;  })  }   }

  public deleteManyUser() : void | boolean { let confirmDeletion = confirm('Are you sure you want to perform this action?');

      if (confirmDeletion) {

        this.us.$deleteManyUser(this.udl)

        .subscribe((val) => { this.users = this.users.filter((user) => {

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is successful and many user is deleted.'); 

           return this.udl.indexOf(user.num) < 0;  })  } ,

            (error) => { 

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is unsuccessful and many user is not deleted.');   } )  }

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
