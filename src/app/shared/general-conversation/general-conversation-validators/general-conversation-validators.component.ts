import { Component , Input , OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({

  'selector' : 'app-general-conversation-validators',

  'templateUrl' : './general-conversation-validators.component.html',

  'styleUrls' : ['./general-conversation-validators.component.css']

})

export class GeneralConversationValidatorsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {

  }


  @Input('system-type') systemType : string;

  @Input('entry-slug') public entrySlug : FormControl;

  @Input() public text : FormControl;

  @Input() public status : FormControl;

  @Input() stage : FormControl;

  @Input() unit : FormControl;

  @Input() num : FormControl;

  @Input() search : FormControl;

}
