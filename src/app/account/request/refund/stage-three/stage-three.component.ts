import { Component , Input , OnInit , ViewEncapsulation } from '@angular/core';

import { FormControl , FormGroup } from '@angular/forms';

import { GeneralRequest } from '../../request';

import "../../../../../assets/js/froala_editor.min.js";
import "../../../../../assets/js/plugins/align.min.js";
import "../../../../../assets/js/plugins/colors.min.js";
import "../../../../../assets/js/plugins/fullscreen.min.js";
import "../../../../../assets/js/plugins/font_family.min.js";
import "../../../../../assets/js/plugins/font_size.min.js";
import "../../../../../assets/js/plugins/line_breaker.min.js";
import "../../../../../assets/js/plugins/line_height.min.js";
import "../../../../../assets/js/plugins/print.min.js";
import "../../../../../assets/js/plugins/char_counter.min.js";
import "../../../../../assets/js/plugins/word_paste.min.js";
import "../../../../../assets/js/plugins/lists.min.js";
import "../../../../../assets/js/plugins/paragraph_style.min.js";
import "../../../../../assets/js/plugins/paragraph_format.min.js";
import "../../../../../assets/js/plugins/quote.min.js";

@Component({

  'selector' : 'app-stage-three',

  'templateUrl' : './stage-three.component.html',

  'styleUrls' : ['./stage-three.component.css'] ,

  'encapsulation' : ViewEncapsulation.None

})

export class StageThreeComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void { 

  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('main-body') public main_body : FormControl;

  @Input('current-stage') public currentStage : string | number;

  @Input() public status : FormControl;

  @Input() public text : FormControl;

  @Input() public stage : FormControl;

  @Input() public entry : GeneralRequest;

}
