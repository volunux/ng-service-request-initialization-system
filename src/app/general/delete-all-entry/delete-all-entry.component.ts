import { Component , OnInit , Input } from '@angular/core';

@Component({

  'selector' : 'app-delete-all-entry',

  'templateUrl' : './delete-all-entry.component.html',

  'styleUrls' : ['./delete-all-entry.component.css']

})

export class DeleteAllEntryComponent implements OnInit {

  constructor() { 

  }

  @Input('system-type') public systemType : string;

  ngOnInit() : void {

  }

}
