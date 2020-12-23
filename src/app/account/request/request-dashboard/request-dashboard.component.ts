import { Component , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-request-dashboard',

  'templateUrl' : './request-dashboard.component.html',

  'styleUrls' : ['./request-dashboard.component.css']

})

export class RequestDashboardComponent implements OnInit {

  constructor() { 

  }

  public systemType : string = 'Request';

  public title : string = 'User Request';
  
  public view : string = 'gen-internal';

  public entries : { [key : string] : string } = 

    { 'course-registration' : 'Course Registration' , 

    'school-result' : 'School Result' , 

    'email-password' : 'Email Password' , 

    'internet-credential' : 'Internet Credential' , 

    'internet-password' : 'Internet Password' , 

    'refund' : 'Refund' };

  ngOnInit() : void {
  
  }

}
