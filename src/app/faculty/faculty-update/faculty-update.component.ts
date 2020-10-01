import { Component, OnInit } from '@angular/core';

import { ActivatedRoute , Router } from '@angular/router';

import { FormBuilder , FormGroup , FormControl , Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Faculty } from '../faculty';

import { FacultyService } from '../faculty.service';

import { DialogService } from './dialog.service';

import { FacultyValidatorService } from '../faculty-validator.service';

@Component({

	selector: 'app-faculty-update',
	
	templateUrl: './faculty-update.component.html',
	
	styleUrls: ['./faculty-update.component.css'] ,

})

export class FacultyUpdateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private fb : FormBuilder ,

  						private facultyService : FacultyService , private fv : FacultyValidatorService , private dialogService : DialogService) { 

  }

	public facultyForm : FormGroup;

	public faculty : Faculty;

	private entryIdx : number;

	ngOnInit(): void {

		this.facultyForm = this.fv.createForm();

		this.route.paramMap.subscribe((params) => {

			this.facultyService.updateFaculty(+params.get('faculty'))

				.subscribe((faculty : Faculty) => { this.entryIdx = faculty.num;

					this.faculty = faculty;

						this.facultyForm.patchValue(faculty);  } ,

							(error) => {  this.error = {...error , 'resource' : error.resource };  })   });
	}

	public title : string = 'Faculty Update';

	public error : any;

	public updateFaculty(faculty : Faculty) : any {

		this.facultyService.$updateFaculty(this.entryIdx , faculty)

			.subscribe((data : {'updated' : true , 'faculty' : Faculty }) => {

				if (data.updated) {	this.router.navigate(['faculty' , 'entries']);	}	});

	}

  public goBackToFaculties() : void {

      this.router.navigate(['faculty' , 'entries']);
  }

	public canDeactivate(): Observable<boolean> | boolean {

  if (false) {
    
    return true;
  }

  return this.dialogService.confirm('Discard changes?');
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
