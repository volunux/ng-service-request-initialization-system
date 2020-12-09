import { Component , Input , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-guidelines',

  'templateUrl' : './guidelines.component.html',

  'styleUrls' : ['./guidelines.component.css']

})

export class GuidelinesComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input() public view : string;

  @Input('system-guideline') systemGuideline : string;

}
