import { Component , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-user',

  'templateUrl' : './user.component.html',

  'styleUrls' : ['./user.component.css']

})

export class UserComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  public systemType : string = 'User';

  public title : string = this.systemType;

  public view : string = 'gen-internal';

}
