import { Component , Input , OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { FormControl } from '@angular/forms';

import { Subject } from 'rxjs';

import { debounceTime , distinctUntilChanged , switchMap } from 'rxjs/operators';

import { General } from '../../../shared/interfaces/general';

import { Statistics } from '../statistics';

import { StatisticsService } from '../statistics.service';

import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

import { NotificationService } from '../../../shared/services/notification.service';

@Component({

  'selector' : 'app-statistics-entries',

  'templateUrl' : './statistics-entries.component.html',

  'styleUrls' : ['./statistics-entries.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService]

})

export class StatisticsEntriesComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private location : Location ,

              private us : StatisticsService , private ems : ErrorMessagesService , private ns : NotificationService ) { 

  }

  public systemType : string;

  public viewWord : string;

  public title : string;

  public view : string;

  public link : string;

  public link2 : boolean;

  public $link : string;

  public entries : General;

  public error : General | null | boolean = false;

  public pageNumber : number = 1;

  public $entriesLength : number = 0;

  public $entryRef : any;

  public $entryType : string;

  public $records : General;



  public trackById(idx : number , entry : Statistics) : string {

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

    this.$entryType = data.entryType;

    this.$records = data.entries.records;

    this.us.$systemType = this.systemType;

    this.us.$sa = this.$link;

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let whichPage = params.get('page') , whichRef = params.get('name');

       this.$entryRef = whichRef ? true : 0;

       this.pageNumber = +whichPage ? +whichPage : 1;

      let paramsRegister = params , paramKeys = paramsRegister.keys , paramsObject = {};

      for (let key of paramKeys) { let param = paramsRegister.get(key);

        if (param) paramsObject[key] = param; }

        return this.getAllEntry();  });

   }


  public getAllEntry() {

   this.us.getAllEntry(this.$entryType)
  
    .subscribe(($entries : General) => {

      if (!$entries) {

        return this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message);  }

         this.error = null;

         this.entries = $entries;		});
  }


}
