import { Component , OnInit , Input } from '@angular/core';

@Component({

  selector: 'app-resource-unavailable',

  templateUrl: './resource-unavailable.component.html',

  styleUrls: ['./resource-unavailable.component.css']

})

export class ResourceUnavailableComponent implements OnInit {

  constructor() { 

  }

  @Input() public error : any;

  ngOnInit(): void {
  
  }

}
