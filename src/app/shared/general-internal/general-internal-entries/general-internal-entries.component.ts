import { Component , Input , OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { General } from '../../interfaces/general';

import { SearchQuery } from '../../interfaces/search-query';

import { GeneralInternal } from '../general-internal';

import { GeneralInternalService } from '../general-internal.service';

import { GeneralInternalFormService } from '../general-internal-form.service';

import { GeneralAllService } from '../../general-all/general-all.service';

import { GeneralSearchService } from '../../services/general-search.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

import { listAnimation } from '../../../animations';

@Component({

  'selector' : 'app-general-internal-entries',

  'templateUrl': './general-internal-entries.component.html',

  'styleUrls' : ['./general-internal-entries.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService , GeneralSearchService , GeneralAllService] ,

  'animations' : [listAnimation]

})

export class GeneralInternalEntriesComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private location : Location , private gifs : GeneralInternalFormService ,

              private gis : GeneralInternalService , private grss : GeneralSearchService , private gas : GeneralAllService ,

              private ems : ErrorMessagesService , private ns : NotificationService ) { 

    this.grss.entriesSearched$.subscribe(($entries : GeneralInternal[]) => {

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

    this.grss.clearSearch$.subscribe((val) => {

      this.clearSearch$();  });

    this.grss.errorExist$.subscribe((val) => {

      this.error = val;  });

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input('search-filters') public searchFilters : General;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public entries : GeneralInternal[] = [];

  public error : General | null | boolean = false;

  public esdl : number[] = [];

  public p$esdl : boolean = false;

  public pageNumber : number = 1;

  public $entriesLength : number = 0;

  public $entryRef : any;


  public trackByName(idx : number , entry : GeneralInternal) : string {

      return entry.num;
  }

  ngOnInit() : void {

    this.gis.$systemType = this.systemType;

    this.gis.$sa = this.$link;

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let paramsObject = this.gas.paramProcessor(params , this)

        return this.getAllEntry(paramsObject);  });

  }

  public getAllEntry(sq : SearchQuery) {

   this.gis.getAllEntry(sq)
  
    .subscribe(($entries : GeneralInternal[]) => {

      if ($entries.length < 1) {

        this.entries = [];

        this.$entriesLength = $entries.length;

        return this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message); }

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

    this.grss.searchCleared.next(true);

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
