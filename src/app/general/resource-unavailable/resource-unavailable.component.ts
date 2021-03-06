import { Component , ChangeDetectionStrategy , Input , OnInit , } from '@angular/core';

@Component({

  'selector' : 'app-resource-unavailable',

  'templateUrl' : './resource-unavailable.component.html',

  'styleUrls' : ['./resource-unavailable.component.css'] ,

  'changeDetection' : ChangeDetectionStrategy.OnPush

})

export class ResourceUnavailableComponent implements OnInit {

  constructor() { 

  }

  public errorKeys : string[] = [];

  public error : any;

  @Input('error') public set $error(val : { [key : string] : any }) {

    if (val.error) {

      this.errorKeys = Object.keys(val.error);

  	  this.error = val;  }

  };

  ngOnInit() : void {
  
  }

}
