import { Component , Input , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-pagination',

  'templateUrl' : './pagination.component.html',

  'styleUrls' : ['./pagination.component.css']

})

export class PaginationComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('entries-length') public $entriesLength : number;

  @Input('page-number') public pageNumber : number;

  @Input('entry-ref') public $entryRef : string;

}
