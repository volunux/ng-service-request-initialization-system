import { Component , ChangeDetectionStrategy , Input , Inject , OnInit , Renderer2 , ViewChild , ElementRef } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

import { FroalaEditorService } from '../froala-editor.service';

declare var FroalaEditor: any;

@Component({

  'selector' : 'app-refund-editor',

  'templateUrl' : './refund-editor.component.html',

  'styleUrls' : ['./refund-editor.component.css'] ,

  'changeDetection' : ChangeDetectionStrategy.OnPush

})

export class RefundEditorComponent implements OnInit {

  constructor(private readonly fes : FroalaEditorService , @Inject(DOCUMENT) private readonly document: any , private renderer : Renderer2) {


  }

  @Input('main-body') public main_body : FormControl;

  @Input('entry-form') public entryForm : FormGroup;
 

  ngOnInit() {

  }

  ngDoCheck() {


}


}
