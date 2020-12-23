import { Component , OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { General } from '../general';

@Component({

  'selector' : 'app-payment-all-entry-create',

  'templateUrl' : './payment-all-entry-create.component.html',

  'styleUrls' : ['./payment-all-entry-create.component.css']

})

export class PaymentAllEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  public systemGuideline : string;

  public paymentRule : General;

  ngOnInit() : void {
 		
 		let data = this.route.snapshot.data;

 			this.systemType = data.create.systemType;

 			this.title = data.create.title;

 			this.view = data.create.view;

 			this.viewWord = data.create.viewWord;

 			this.link = data.create.link;

 			this.$link = data.create.$link;

 			this.systemGuideline = data.create.systemGuideline;

 			this.paymentRule = data.create.paymentRule;

  }

}
