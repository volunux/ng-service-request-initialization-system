import { Component , Input , OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
 
  'selector' : 'app-general-payment-search',
 
  'templateUrl' : './general-payment-search.component.html',
 
  'styleUrls' : ['./general-payment-search.component.css']

})

export class GeneralPaymentSearchComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('search') public searchConfig : { [key : string] : any };

  @Input('search-ctrl') public search : FormControl;

  @Input('search-filters') public searchFilters : string[];

  public options : { [key : string] : any };

  @Input() set searchOpts(opts : { [key : string] : any }) {

      this.options = opts;
  }

}
