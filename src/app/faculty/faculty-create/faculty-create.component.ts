import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FormBuilder , FormGroup , FormControl , Validators } from '@angular/forms';

import { Faculty , FacultyInstance } from '../faculty';

import { FacultyService } from '../faculty.service';

import { FacultyValidatorService } from '../faculty-validator.service';

@Component({

  selector: 'app-faculty-create',

  templateUrl: './faculty-create.component.html',

  styleUrls: ['./faculty-create.component.css'] ,

})

export class FacultyCreateComponent implements OnInit {

  constructor(private router : Router , private fb : FormBuilder , private facultyService : FacultyService , private fv : FacultyValidatorService ) { 

  }

  public facultyForm : FormGroup;

  ngOnInit(): void {

   this.facultyForm = this.fv.createForm();

  }

  public title : string = 'Add Faculty';

  public onSubmitFaculty(faculty : Faculty) {

    faculty._id = faculty.name;

  	this.facultyService.createFaculty(faculty)

      .subscribe((data : {'created' : boolean , 'faculty' : Faculty}) => {

          if (data.created) { return this.router.navigate(['faculty' , 'entry' , 'detail' , faculty.num]);  }
      });
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
