import { Component, OnInit } from '@angular/core';

import { ActivatedRoute , Router } from '@angular/router';

import { FormBuilder , FormGroup , FormControl , Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Faculty } from '../faculty';

import { FacultyService } from '../faculty.service';

import { FacultyValidatorService } from '../faculty-validator.service';

@Component({

  selector: 'app-faculty-delete',
  
  templateUrl: './faculty-delete.component.html',
  
  styleUrls: ['./faculty-delete.component.css'] ,

})

export class FacultyDeleteComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private fb : FormBuilder ,

              private facultyService : FacultyService , private fv : FacultyValidatorService) { 

  }

  public facultyForm : FormGroup;

  public faculty : Faculty;

  private entryIdx : number;

  public title : string = 'Faculty Delete';

  public error : any;

  ngOnInit(): void {

    if (true) {

    this.facultyForm = this.fv.createForm();

    this.route.paramMap.subscribe((params) => {

      this.facultyService.deleteFaculty(+params.get('faculty'))

        .subscribe((faculty) => { this.entryIdx = faculty.num;

          this.faculty = faculty;  

          this.facultyForm.patchValue(faculty);  } ,

          (error) => {  this.error = {...error , 'resource' : error.resource };  })   });   }

    if (false) { this.route.data.subscribe((data : {'faculty' : Faculty}) => { this.faculty = data.faculty;   })  }

  }

  public deleteFaculty(faculty : Faculty) : any {

    this.facultyService.$deleteFaculty(this.entryIdx)

      .subscribe((faculty) => {

        if (faculty.deleted) this.router.navigate(['faculty' , 'entries']);  });
  }

  get name() {

      return this.facultyForm.get('name') as FormControl;
  }

  get shortCode() {

    return this.facultyForm.get('shortCode') as FormControl;
  }

  get num() {

    return this.facultyForm.get('num') as FormControl;
  }

  get isFormValid() {

    return this.facultyForm.valid;
  }


}
