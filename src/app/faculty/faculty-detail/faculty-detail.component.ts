import { Component, OnInit } from '@angular/core';

import { ActivatedRoute , Router } from '@angular/router';

import { Faculty } from '../faculty';

import { FacultyService } from '../faculty.service';

import { Observable } from 'rxjs';

import { switchMap } from 'rxjs/operators';

@Component({

  'selector' : 'app-faculty-detail',

  'templateUrl' : './faculty-detail.component.html',

  'styleUrls' : ['./faculty-detail.component.css'] ,

})

export class FacultyDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private facultyService : FacultyService ) { 

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {

      let entry = +params.get('faculty');

        this.facultyService.getFaculty(entry)

          .subscribe((faculty) => { this.faculty = faculty;  } ,

                      (error) => {  this.error = {...error , 'resource' : error.resource };  } )   });
  }

  public title : string = 'Faculty Detail';

  public faculty : Faculty;

  public error : any;

  public goBackToFaculties() : void {

      this.router.navigate(['faculty' , 'entries']);
  }

}
