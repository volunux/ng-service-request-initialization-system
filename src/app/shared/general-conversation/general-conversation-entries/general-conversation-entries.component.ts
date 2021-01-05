import { Component , Input , OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute , Router , ParamMap } from '@angular/router';

import { General } from '../../interfaces/general';

import { SearchQuery } from '../../interfaces/search-query';

import { GeneralConversation } from '../general-conversation';

import { GeneralConversationService } from '../general-conversation.service';

import { GeneralConversationFormService } from '../general-conversation-form.service';

import { GeneralSearchService } from '../../services/general-search.service';

import { GeneralAllService } from '../../general-all/general-all.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { NotificationService } from '../../services/notification.service';

import { listAnimation } from '../../../animations';

@Component({

  'selector' : 'app-general-conversation-entries',

  'templateUrl' : './general-conversation-entries.component.html',

  'styleUrls' : ['./general-conversation-entries.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService , GeneralSearchService , GeneralAllService] ,

  'animations' : [listAnimation]

})

export class GeneralConversationEntriesComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private location : Location ,

              private gcfs : GeneralConversationFormService , private gcs : GeneralConversationService , private grss : GeneralSearchService , 

              private gas : GeneralAllService , private ems : ErrorMessagesService , private ns : NotificationService ) { 

    this.grss.entriesSearched$.subscribe(($entries : GeneralConversation[]) => {

      this.location.replaceState(`/request/${this.link}/entries`);

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

  public entries : GeneralConversation[] = [];

  public error : General | null | boolean = false;

  public esdl : number[] = [];

  public p$esdl : boolean = false;

  public pageNumber : number = 1;

  public $entriesLength : number = 0;

  public $entryRef : any;



  public trackByName(idx : number , entry : GeneralConversation) : string {

      return entry.num;
  }

  ngOnInit() : void {

    this.gcs.$systemType = this.systemType;

    this.gcs.$sa = this.$link;

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let paramsObject = this.gas.paramProcessor(params , this)

        return this.getAllEntry(paramsObject);  });
  }

  public getAllEntry(sq : SearchQuery) {

   this.gcs.getAllEntry(sq)
  
    .subscribe(($entries : GeneralConversation[]) => {

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
