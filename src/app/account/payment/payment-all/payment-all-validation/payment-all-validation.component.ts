import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({

  'selector' : 'app-payment-all-validation',

  'templateUrl' : './payment-all-validation.component.html',

  'styleUrls' : ['./payment-all-validation.component.css']

})

export class PaymentAllValidationComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  ngOnInit() : void {

  	let data = this.route.snapshot.data;

  		this.systemType = data.validation.systemType;

  		this.title = data.validation.title;

  		this.view = data.validation.view;

  		this.viewWord = data.validation.viewWord;

  		this.link = data.validation.link;

  		this.$link = data.validation.$link;
  
  }

}
