import { Component , EventEmitter , Input , OnInit , ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';

import { Subject } from 'rxjs';

import { debounceTime , distinctUntilChanged , switchMap } from 'rxjs/operators'; 

import { GeneralSearchService } from '../../shared/services/general-search.service';

import { GeneralFormService } from '../general-form.service';

@Component({

  'selector' : 'app-search',

  'templateUrl' : './search.component.html',

  'styleUrls' : ['./search.component.css']

})

export class SearchComponent implements OnInit {

  constructor(private gss : GeneralSearchService , private gfs : GeneralFormService) {

    this.gss.searchCleared$.subscribe((val) => {

      this.refreshing = false;
    })

  }

  @Input('system-type') public systemType : string;

  @Input('search-filters') public searchFilters : { [key : string] : any };

  @Input() public $link : string;

  public refreshing : boolean;

  public entrySearching : boolean;

  public searchQuery : { [key : string] : any };

  public entriesSearched : boolean;

  public error : boolean;

  public errorEmit : EventEmitter<boolean> = new EventEmitter<boolean>();

  public clearSearchEmit : EventEmitter<boolean> = new EventEmitter<boolean>();

  public searchTerm : Subject<{[key : string] : any }> = new Subject<{[key : string] : any }>();

  public searchCtrl : FormControl;

  ngOnInit() : void {

    this.searchCtrl = this.gfs.searchForm(this.searchFilters);

    this.searchTerm.pipe(

      debounceTime(4000) ,

      distinctUntilChanged() ,

      switchMap((query : { [key : string] : string }) => { return this.gss.searchTerms<{ [key : string] : string }[]>(query , this.$link , `${this.systemType} Entries` , []); })  )

    .subscribe(($entries : { [key : string] : any }[]) => { 

      this.entrySearching = false;

      this.refreshing = false;

      this.entriesSearched = true;

     	this.gss.entriesSearched.next($entries);	});
  
  }


  public searchEntry(qt : string , qv : string) : boolean | void {

    this.gss.errorExist.next(null);

    this.entriesSearched = false;

    if (!qt.trim() || (Object.keys(this.searchFilters).indexOf(qt) < 0)) { return false; }

    this.entrySearching = true;

    this.gss.searchQuery = { [qt] : qv };

    this.searchTerm.next(this.gss.searchQuery);
  }



  public clearSearch() : void {

    this.gss.searchQuery = {};

    this.entriesSearched = false;

    this.refreshing = true;

    this.gss.clearSearch.next(true);

    this.gss.errorExist.next(null);
 
  }




  public validSearch(qt) {

    return Object.keys(this.searchFilters).indexOf(qt) < 0;
  }

  get search() : FormControl {

    return this.searchCtrl;
  }

}
