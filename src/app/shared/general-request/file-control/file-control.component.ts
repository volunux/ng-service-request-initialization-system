import { Component , Input , OnInit , ElementRef , AfterViewInit , ViewChildren , ViewChild , QueryList , ComponentRef } from '@angular/core';

import { FormControl , FormGroup , FormBuilder } from '@angular/forms';

import { AttachmentUploadComponent } from '../../simples/attachment-upload/attachment-upload.component';

@Component({
  
  'selector' : 'app-file-control',
  
  'templateUrl' : './file-control.component.html',
  
  'styleUrls': ['./file-control.component.css']

})

export class FileControlComponent implements OnInit {

  constructor(private fb : FormBuilder) { 

  }

  public error : { [key : string] : any } | null | boolean = false;

  @Input() changeDisplay : FormGroup;

  ngOnInit(): void {
  
  }

  public addAttachment : FormGroup = this.fb.group({

    'photos' : this.fb.array([new FormControl('') , new FormControl('') , new FormControl('') , new FormControl('')]) ,

  });

  public theCtrl(ctrl) {

    return this.addAttachment.get(ctrl) as FormControl;
  }

  get profilePhoto() {

    return this.addAttachment.get('profilePhoto') as FormControl;
  }

  get signature() {

    return this.addAttachment.get('signature') as FormControl;
  }

  @ViewChildren(AttachmentUploadComponent) fileUploads : QueryList<AttachmentUploadComponent>;


}
