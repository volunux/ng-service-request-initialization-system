import { Component , Input , OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { FormControl } from '@angular/forms';

import { Subject } from 'rxjs';

import { debounceTime , distinctUntilChanged , switchMap } from 'rxjs/operators';

import { General } from '../../../../shared/interfaces/general';

import { RequestLimit } from '../request-limit';

import { RequestLimitService } from '../request-limit.service';

import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

import { NotificationService } from '../../../../shared/services/notification.service';

import { GeneralAllService } from '../../../../shared/general-all/general-all.service';

import { listAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-request-limit-entries',

  'templateUrl' : './request-limit-entries.component.html',

  'styleUrls' : ['./request-limit-entries.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService , GeneralAllService] ,

  'animations' : [listAnimation]

})

export class RequestLimitEntriesComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private location : Location , private gas : GeneralAllService ,

              private rls : RequestLimitService , private ems : ErrorMessagesService , private ns : NotificationService ) { 

  }

  public systemType : string;

  public viewWord : string;

  public searchFilters : General;

  public title : string;

  public view : string;

  public link : string;

  public link2 : boolean;

  public $link : string;

  public entries : RequestLimit[] = [];

  public error : General | null | boolean = false;

  public esdl : number[] = [];

  public p$esdl : boolean = false;

  public pageNumber : number = 1;

  public $entriesLength : number = 0;

  public $entryRef : any;



  public trackByName(idx : number , entry : RequestLimit) : string {

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

    this.rls.$systemType = this.systemType;

    this.rls.$sa = this.$link;

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let whichPage = params.get('page') , whichRef = params.get('name');

       this.$entryRef = whichRef ? true : 0;

       this.pageNumber = +whichPage ? +whichPage : 1;

      let paramsRegister = params , paramKeys = paramsRegister.keys , paramsObject = {};

      for (let key of paramKeys) { let param = paramsRegister.get(key);

        if (param) paramsObject[key] = param; }

        return this.getAllEntry(paramsObject);  });

   }


  public getAllEntry(sq : General) {

   this.rls.getAllEntry(sq , this.link2)
  
    .subscribe(($entries : RequestLimit[]) => {

      if ($entries.length < 1) {

        this.entries = [];

        this.$entriesLength = $entries.length;

        return this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message);  }

         this.error = null;

         this.$entriesLength = $entries.length;

         this.entries = $entries;

      if (this.entries.length > 10) this.entries.pop();  });
  }

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
