import { Component , OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Faculty , FacultyInstance } from '../faculty';

import { FacultyService } from '../faculty.service';

import { FacultyValidatorService } from '../faculty-validator.service';

@Component({

  selector: 'app-faculty-delete-all',

  templateUrl: './faculty-delete-all.component.html',

  styleUrls: ['./faculty-delete-all.component.css']

})

export class FacultyDeleteAllComponent implements OnInit {

  public error : any;

  constructor(private router : Router , private facultyService : FacultyService ) { 

  }

  ngOnInit(): void {

  }

  public title : string = 'Faculty : Delete All Entries';

  public description : string = `All faculty entry if the button is confirmed will result in total deletion or exclusion from the system or database.

  It is advised you review your decision before pressing the confirmation button which will remove or delete all faculty entry from the system.`;

  public deleteAllFaculty() : any {

    this.facultyService.$deleteAllFaculty()
      
      .subscribe((val) => { return this.router.navigate(['faculty']); } ,

      (error) => { 

        this.error = {...error , 'resource' : error.resource };  }

      )

  }

}
