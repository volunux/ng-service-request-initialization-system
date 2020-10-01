import { Component , OnInit } from '@angular/core';

import { ActivatedRoute , ParamMap , Router } from '@angular/router';

import { FacultyService } from '../faculty.service';

import { SearchQueryService } from '../../search-query.service';

import { Faculty } from '../faculty';

import { Subject } from 'rxjs';

import { debounceTime , distinctUntilChanged , mergeMap , map } from 'rxjs/operators';

@Component({

  selector: 'app-faculty-list',

  templateUrl: './faculty-list.component.html',

  styleUrls: ['./faculty-list.component.css']

})

export class FacultyListComponent implements OnInit {

  public title : string = 'Faculty Entries';

  public faculties : Faculty[] = [];

  public facultiesLength : number = 0;

  public error : any;

  public systemType : string = 'Faculty';

  public facultyDeleteList : number[] = [];

  public confirmationMessage : string = '';

  public searchQuery : { [key : string] : string } = {};

  public pageNumber : number;

  public notificationMessage : string;

  public fadeIn : boolean = false;

  public fadeOut : boolean = false;

  public showNotification : boolean;

  public entrySearching : boolean;

  public requestRef : any;

  public notificationAvailable : boolean = false;

  public entriesSearched : boolean;

  public entryOption$class : any = {

    'entry-option' : this.facultyDeleteList.length >= 2 ,

    'disabled' : this.facultyDeleteList.length < 2
  };

  constructor(private route : ActivatedRoute , private router : Router , private facultyService : FacultyService , private searchService : SearchQueryService) { 

  }

  public searchTerm : Subject<{[key : string] : string}> = new Subject<{[key : string] : string}>();

  public searchEntry(queryType , queryValue) : boolean | void { let searchFilters = ['num' , 'status'];

    if (!queryValue.trim() || (searchFilters.indexOf(queryType) < 0)) { return false; }

    this.entrySearching = true;

    this.searchQuery = { [queryType] : queryValue };

    this.searchTerm.next(this.searchQuery);

  }

  public trackByNum(idx : number , faculty : Faculty) : number {

      return faculty.num;
  }

  public goToFirst() : void {

    this.router.navigate(['first'] , {'relativeTo' : this.route});
  }

  ngOnInit() : void {

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let whichPage = params.get('page') , whichRef = params.get('status');

       this.requestRef = whichRef ? true : 0;

       this.pageNumber = +whichPage ? parseInt(whichPage , 10) : 1;

      let paramsRegister = params , paramKeys = paramsRegister.keys , paramsObject = {}

      for (let key of paramKeys) { let param = paramsRegister.get(key);

        if (param) paramsObject[key] = param }

      if (Object.keys(this.searchQuery).length) paramsObject = {...paramsObject , ...this.searchQuery };

        this.getFaculties(paramsObject);

   })

    this.searchTerm.pipe(

      debounceTime(3000) ,

      distinctUntilChanged() ,

      mergeMap((value) => { return this.searchService.searchTerms(value , 'faculty' , 'Faculty Entries'); })  )

    .subscribe((faculties : Faculty[]) => { this.facultiesLength = faculties.length;

      this.entrySearching = false;

      this.entriesSearched = true;

      if (this.facultiesLength <= 10) this.pageNumber = 0;      

      if (this.facultiesLength > 10) faculties.pop();

      this.faculties = faculties;  } , 

      (error) => { if (this.faculties.length) this.faculties = [];

      this.facultiesLength = 0;

      this.entrySearching = false;

      this.entriesSearched = true;

            this.error = {...error , 'resource' : error.resource };    });

  }

  public backToTop() : void {

    this.router.navigateByUrl('faculty/entries#top');
  }

  public getFaculties(paramsObject : { [key : string] : any }) {

       this.facultyService.getFaculties(paramsObject)
  
    .subscribe((faculties : Faculty[]) => { this.facultiesLength = faculties.length;

      this.faculties = faculties;

        this.entriesSearched = false;

        this.error = false;

      if (this.faculties.length > 10) faculties.pop();  } ,

      (error) => { if (this.faculties.length) this.faculties = [];

        this.error = {...error , 'resource' : error.resource };  });
  }

  public removeNotification() {

    setTimeout(() => {

        this.notificationAvailable = false;

        this.notificationMessage = '';

        this.fadeOut = false;

    } , 4000)
  }

  public clearSearch() : void {

    console.log('Whats going on');

    this.getFaculties({});

    console.log('Why Why');
  }


  public fadeOutNotification() {

    setTimeout(() => {

      this.fadeIn = false;

      this.fadeOut = true;

      this.removeNotification();

    } , 4000)
  }

  public addFacultyToDeleteList(facultyId : number , checked : boolean , idx : number) : void {

  if (checked) { this.facultyDeleteList.push(facultyId);  }

  else if (!checked && this.facultyDeleteList.indexOf(facultyId) > -1) {

    this.facultyDeleteList = this.facultyDeleteList.filter((id) => { let finalId = id !== facultyId;

      if (finalId) return '' + finalId;

      return false;  })  }   }

  public deleteManyFaculty() : void | boolean {

    let confirmDeletion = confirm('Are you sure you want to perform this action?');

      if (confirmDeletion) {

        this.facultyService.$deleteManyFaculty(this.facultyDeleteList)

        .subscribe((val) => { this.faculties = this.faculties.filter((faculty) => {

          this.notificationAvailable = true;

          this.fadeIn = true;

          this.notificationMessage = 'Operation is successful and many faculties deleted.';

          this.fadeOutNotification();

           return this.facultyDeleteList.indexOf(faculty.num) < 0;  })  } ,

            (error) => { this.notificationAvailable = true;

          this.fadeIn = true;

          this.notificationMessage = 'Operation has failed and is successful. Many faculties not deleted.';

          this.fadeOutNotification();  } )  }

          else {  return false;  }
  }

}
