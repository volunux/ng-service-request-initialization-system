import { Component , EventEmitter , Input , OnInit , Output  } from '@angular/core';

import { GeneralRequest } from '../../request';

import { AuthenticationService } from '../../../../authentication/authentication.service';

@Component({

  'selector' : 'app-refund-entry-options',

  'templateUrl' : './entry-options.component.html',

  'styleUrls' : ['./entry-options.component.css']

})

export class EntryOptionsComponent implements OnInit {

  constructor(private as : AuthenticationService) { 

  }

  ngOnInit() : void {
  
  }

  @Input('can-update-entry') public canUpdateEntry : boolean;

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input('view-description') public $view : string;

  @Input('entry-on-review') public p$review : boolean;

  @Input() public entry : GeneralRequest;

  @Input() public link : string;

  @Input() public title : string;

  @Output() public onReviewEntry : EventEmitter<string> = new EventEmitter<string>();

    public $listView : { [key : string] : string } = { 

      'cr' : 'course-registration' , 

      'repsp' :  'email-password' , 

      'csif' : 'internet-credential' ,

      'rpif' : 'internet-password' , 

      'sasr' : 'school-result' ,

      'rf' : 'refund' };


  public setEntryOnReview($evt) : void {

    $evt.preventDefault();

    $evt.stopPropagation();

    this.onReviewEntry.emit(this.entry.slug);

  }

  get view() : string {

    return this.$listView[this.$view];
  }

  get userRole() : string {

    return this.as.userRole;
  } 

}
