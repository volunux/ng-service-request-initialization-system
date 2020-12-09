import { Component , Input , EventEmitter , Output , OnInit , AfterViewInit , OnChanges , OnDestroy , ViewChild , ElementRef , SimpleChanges } from '@angular/core';

import { FormGroup , FormControl } from '@angular/forms';

import { HttpEvent , HttpErrorResponse , HttpResponseBase , HttpEventType } from '@angular/common/http';

import { ImageUploadService } from './image-upload.service';

import { ErrorMessagesService } from '../../services/error-messages.service';

import { switchMap } from 'rxjs/operators';

import { of , Subscription } from 'rxjs';

@Component({

  'selector' : 'app-attachment-upload',

  'templateUrl' : './attachment-upload.component.html',

  'styleUrls' : ['./attachment-upload.component.css'] ,

  'providers' : [ErrorMessagesService , ImageUploadService]

})

export class AttachmentUploadComponent implements OnInit , AfterViewInit , OnDestroy , OnChanges {

  constructor(public iu : ImageUploadService , public ems : ErrorMessagesService) { 

  }

  public imageUrl : string = '';

  public imageFile : File;

  public uaddress : string = '';

  public $fileObj = {	'key' : '' , 'photo' : { 'url' : '' , 'size' : false , 'type' : false } };

  public $fileSize = 500 * 1024;

  public $$file : any;

  public uploadSuccess : boolean = false;

  public currentlyUploading : boolean = false;

  @Input() public theForm : FormGroup;

  @Input() public theControl : FormControl;

  @Input() public myProps : any;

  @Input() public myNumber : string | number;

  @Input('submission') public ready4Submission : boolean;

  @Output('myFile') public myFile : EventEmitter<{ [key : string] : string | number }> = new EventEmitter<{ [key : string] : string | number }>();

	@ViewChild('btnAddFile1') public btnAddFile1 : ElementRef;

	@ViewChild('btnDelFile1') public btnDelFile1 : ElementRef;

	@ViewChild('btnCanFile1') public btnCanFile1 : ElementRef;

	@ViewChild('fileUploadProgress1') public fileUploadProgress1 : ElementRef;

	@ViewChild('fileUploadError1') public fileUploadError1 : ElementRef;

	@ViewChild('fileUploadError11') public fileUploadError11 : ElementRef;

	@ViewChild('fileUploadText1') public fileUploadText1 : ElementRef;

	@ViewChild('fileUploadMessage1') public fileUploadMessage1 : ElementRef;

	@ViewChild('filePercent1') public filePercent1 : ElementRef;

	@ViewChild('selectFileButton') public selectFileButton : ElementRef;

	@ViewChild('fileImage') public fileImage : ElementRef;

	public cancelFile : Subscription;

	public removeFailed : Subscription;

  ngOnInit() : void {
  
  }

  ngAfterViewInit() : void {

  		this.$showButton(this.btnAddFile1 , 'block');

  		this.$setButton(this.btnAddFile1 , true , 'disabled' , 'btn-options');
  }

  ngOnChanges(changes : SimpleChanges) : void {

  	if (changes instanceof Object && changes.ready4Submission.currentValue) {

  		this.fileImage.nativeElement.value = '';	}

  }


  ngOnDestroy() : void {

  	if (this.cancelFile) this.cancelFile.unsubscribe();

  }

  public formSubmittedUploadCancel() {

			this.$setElement(this.fileImage , false);

		 	this.selectFileButton.nativeElement.textContent = 'Choose a File';

			this.fileImage.nativeElement.value = '';

			this.$showButton(this.btnCanFile1 , 'none');

			this.$setElement(this.btnCanFile1 , false);

			this.$setButton(this.btnAddFile1 , true , 'disabled' , 'btn-options');

			this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadError11 , this.fileUploadProgress1 , this.filePercent1 , this.fileUploadText1]);

  }

  public cancelUpload($evt) : void {

  	this.$clearEvent($evt);

			this.$clearEvent($evt);

			this.$setElement(this.btnCanFile1 , true);

  		if (this.cancelFile) this.cancelFile.unsubscribe();

			this.$showButton(this.btnCanFile1 , 'none');

			this.$setElement(this.btnCanFile1 , false);

			this.$setButton(this.btnAddFile1 , false , 'btn-options' , 'disabled');

			this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadError11 , this.fileUploadProgress1 , this.filePercent1 , this.fileUploadText1]);

			this.$setElement(this.fileImage , false);

			this.$setText(this.fileUploadText1 , 'Pending file upload has been canceled. You can proceed to choose and upload another file.' , 'block');

  }

  public deleteUpload($evt) : void {

			this.$clearEvent($evt);

			this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadError11 , this.fileUploadProgress1 , this.filePercent1 , this.fileUploadText1]);

			this.$setText(this.fileUploadMessage1 , 'Photo is getting deleted. Please be patient and wait.' , 'block');

			this.$setButton(this.btnDelFile1 , true , 'disabled' , 'btn-options');

			this.removeFailed =  this.iu.removeImage(this.$fileObj.key)

			.subscribe((val) => {

			let displayErr = setTimeout(() => {

						this.$clearText([this.fileUploadMessage1 , this.fileUploadText1 , this.fileUploadError1 , this.fileUploadProgress1]);
					
						this.$setButton(this.btnDelFile1 , false , 'btn-options' , 'disabled');
					
						this.$setText(this.fileUploadError11 , 'An error has occured while removing image. Please try again.' , 'block');

						this.removeFailed.unsubscribe();

			} , 30000);

				if (val instanceof Object && val.isDeleted) {

				this.$setElement(this.fileImage , false);
				
				this.$setButton(this.btnAddFile1 , false , 'btn-options' , 'disabled');

				this.$showButton(this.btnDelFile1 , 'none');
				
				this.$showButton(this.btnAddFile1 , 'block');
				
				this.$setText(this.fileUploadMessage1 , `${this.myProps.label} successfully deleted. You can now upload another photo.` , 'block');	}

				clearTimeout(displayErr);

				this.$$file = null;

				this.$fileObj = {	'key' : '' , 'photo' : { 'url' : '' , 'size' : false , 'type' : false } };

				if (!val) {

					this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadProgress1]);
					
					this.$setButton(this.btnDelFile1 , false , 'btn-options' , 'disabled');
					
					this.$setText(this.fileUploadError1 , 'An error has occured. Please try again.' , 'block');
				}

			});

  }

  public addFile(e , file) : any {

  	this.$clearEvent(e);

  	this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadError11 , this.fileUploadProgress1 , this.fileUploadText1]);

		let data = { 'photo' : file.files[0] };

		if (!data.photo.name) return;

				this.cancelFile = this.iu.signFile(data.photo)

				.pipe(

						switchMap((hash) => {

						if (!hash) { 

							return of({'noHash' : true});	}

							else {

						this.$fileObj.photo.url = `${hash.data.url}/${hash.data.fields.key}`;

						this.$fileObj.key = hash.data.fields.key;

							let $myFormData = new FormData();

								for (let key$ in hash.data.fields) {

										$myFormData.append(key$ , hash.data.fields[key$]);
								}

								$myFormData.append('file' , data.photo);

								return this.iu.uploadImage(hash , $myFormData);		}	})

					)

				.subscribe((hash) => {

          if (hash instanceof Object && hash.noHash) {

					this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadError11 , this.fileUploadProgress1]);

					this.$setText(this.fileUploadError1 , 'A server error has occured. Please try again.' , 'block');	

					return false;	}

					else if (hash == 408) {

					this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadError11 , this.fileUploadProgress1 , this.fileUploadText1 , this.filePercent1]);

					this.$setText(this.fileUploadError1 , 'A network timeout error has occured. Please try again.' , 'block');

					this.$showButton(this.btnCanFile1 , 'none');
					
					this.$setElement(this.btnCanFile1 , false);	

					this.$setButton(this.btnAddFile1 , false , 'btn-options' , 'disabled');
					
					this.$showButton(this.btnAddFile1 , 'block');

					return false;	}

					else if (hash == null && this.uploadSuccess == false) {

					this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadError11 , this.fileUploadProgress1 , this.fileUploadText1 , this.filePercent1]);

					this.$setText(this.fileUploadError1 , 'A network error has occured. Please try again.' , 'block');

					this.$showButton(this.btnCanFile1 , 'none');
					
					this.$setElement(this.btnCanFile1 , false);	

					this.$setButton(this.btnAddFile1 , false , 'btn-options' , 'disabled');
					
					this.$showButton(this.btnAddFile1 , 'block');

					this.$setElement(this.fileImage , false);

					return false;	}

		if (hash instanceof Object) {

			switch (hash.type) {

        case HttpEventType.Sent:

					this.$setElement(this.fileImage , true);

					this.$setButton(this.btnAddFile1 , true , 'disabled' , 'btn-options');

					this.$showButton(this.btnCanFile1 , 'block');

					this.$setText(this.fileUploadMessage1 ,`${this.myProps.label} is uploading. Please be patient and wait. % uploaded : ` , 'inline-block' );		

					this.currentlyUploading = true;
      
          break;
        
        case HttpEventType.ResponseHeader:
 
          break;
        
        case HttpEventType.UploadProgress:

          let percentComplete = '' + (Math.round(hash.loaded / hash.total * 100));
          
          this.$setText(this.filePercent1 , percentComplete , 'inline-block');
          
          break;
      }	}

      if (hash instanceof Object && hash.status == 201) {

      	this.uploadSuccess = true;

			this.$showButton(this.btnAddFile1 , 'none');
			
			this.$setButton(this.btnDelFile1 , false , 'btn-options' , 'disabled');
			
			this.$showButton(this.btnDelFile1 , 'block');
			
			this.$clearText([this.fileUploadMessage1 , this.filePercent1 , this.fileUploadText1 , this.fileUploadProgress1 , this.fileUploadError1]);
			
			this.$setText(this.fileUploadText1 , `${this.myProps.label} successfully uploaded.` , 'block');
			
			this.$showButton(this.btnCanFile1 , 'none');
			
			this.$setElement(this.btnCanFile1 , false);	

			this.iu.addImage(this.$fileObj)

				.subscribe();

			this.currentlyUploading = false;

		this.$$file = {

				'location' : this.$fileObj.photo.url ,

				'key' : this.$fileObj.key ,
				
				'size' : this.fileImage.nativeElement.files[0].size ,

				'mimetype' : this.fileImage.nativeElement.files[0].type ,

				'encoding' : this.fileImage.nativeElement.files[0].type }

	}

      if (hash instanceof Object && hash.status == 400) {

					this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadError11 , this.fileUploadProgress1 , this.fileUploadText1 , this.filePercent1]);

					this.$setText(this.fileUploadError1 , 'Upload request has timed out. Please try again.' , 'block');

					this.$showButton(this.btnCanFile1 , 'none');
					
					this.$setElement(this.btnCanFile1 , false);	

					this.$setButton(this.btnAddFile1 , false , 'btn-options' , 'disabled');
					
					this.$showButton(this.btnAddFile1 , 'block');		

					return false;	}		});
  }



  public uploadFile($event , file) : any {

  	this.$clearEvent($event);

  	this.imageFile = file.files[0];

		let data = { 'photo' : file.files[0] };

		if (!data.photo) {

			this.$clearText([this.fileUploadMessage1 , this.fileUploadText1 , this.fileUploadError1 , this.fileUploadError11 , this.filePercent1 , this.fileUploadProgress1]);

			this.$setText(this.selectFileButton , 'Choose a file to upload.' , 'block');

  		this.$showButton(this.btnAddFile1 , 'block');

  		this.$setButton(this.btnAddFile1 , true , 'disabled' , 'btn-options');

			this.$setText(this.fileUploadError1 , `${this.myProps.label} should be provided and cannot be empty.` , 'block');

			return false;	}

  		this.$checkImageSize(this.imageFile , this.$fileObj , this.selectFileButton);

  		this.$checkImageType(this.imageFile , this.$fileObj , this.selectFileButton);

			this.$validateSignature(this.imageFile , this.$fileObj);

  }

  public $clearEvent(el) : void {

  	el.stopPropagation();

  	el.preventDefault();
  
  }

  public signFile(file) : void {

  		this.iu.signFile(file);
  }

	public $showButton(ref : ElementRef , display : string) { let $el = ref.nativeElement;
	
			$el.style.display = display; }

	public $setElement(ref : ElementRef , attr : string | boolean) { let $el = ref.nativeElement;
			
			$el.disabled = attr;	}

	public $setText(ref : ElementRef , text : string , display : string , ref2? , ref3?) { let el = ref.nativeElement;

		el.textContent = text;

		el.style.display = display;

	}

	public updateDisplayAndSignature() {

		this.$$file = {

				'location' : this.$fileObj.photo.url ,
				
				'size' : this.fileImage.nativeElement.files[0].size ,

				'type' : this.fileImage.nativeElement.type ,

				'encoding' : this.fileImage.nativeElement.size		
		}

	}

public $checkImageSize($myFile , $fileRef , $btnRef? : ElementRef) {

	if ($myFile) {

		if ($myFile.size > this.$fileSize) {
				
				this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadProgress1]);

				this.$setButton(this.btnAddFile1 , true , 'disabled' , 'btn-options');

				this.$setText(this.fileUploadError1 , 'File is too large and will not be uploaded.' , 'block');

				this.$setText($btnRef , 'A file with name ' + $myFile.name + ' has been selected' , 'block');

				$fileRef.photo.size = true;

					return false;	}
	
				this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadProgress1]);

				this.$setButton(this.btnAddFile1 , false , 'btn-options' , 'disabled');

				this.$setText($btnRef , 'A file with name ' + $myFile.name + ' has been selected' , 'block');

								$fileRef.photo.size = false;
			} else {

					$btnRef.nativeElement.textContent = 'Choose a File';

					this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadProgress1]);

					this.$setButton(this.btnAddFile1 , true , 'disabled' , 'btn-options');	}
	 }



	public $clearText(elRefs : ElementRef[]) {

	if (elRefs.length) {

		for (let i = 0; i < elRefs.length; i++) { let $el = elRefs[i];

			if ($el) { let el = $el.nativeElement;

					el.style.display = 'none';

					el.textContent = '';	}	}	}	}


	public getTypeFromMagicNumber(signature) : string {

	switch (signature) {
		 
			case "89504E47" :

		return "image/png"

			case "47494638" :
		
		return "image/gif"

			case "25504446" :
		
		return "application/pdf"

			case "FFD8FFDB" :
			case "FFD8FFE0" :
			case "FFD8FFE1" :
			case "FFD8FFE2" :
			case "FFD8FFE3" :
			case "FFD8FFE8" :
		
		return 'image/jpeg'

			case "504B0304" :
		
		return "application/zip"

			default :
		
		return "Unknown filetype"
	}
}



	public $setButton($el , attr , add = '' , remove = '') {

		let el = $el.nativeElement;

		el.disabled = attr;

		let $elArr = $el.nativeElement.className.split(' ');
 
		if ($elArr.indexOf(add) == -1) {
		
				el.className += ' ' + add;	}

			let $remove = remove;

			let $rm = new RegExp($remove , 'g');

			el.className = el.className.replace($rm , '');	}



	public $checkImageType($myFile : File , $fileRef : { [key : string] : any } , $btnRef? : ElementRef) {

		if ($myFile) {

			if ($myFile.type.indexOf('image') == -1) {

		this.$clearText([this.fileUploadMessage1 , this.fileUploadProgress1]);
	
		this.$setButton(this.btnAddFile1 , true , 'disabled' , 'btn-options');
	
		this.$setText(this.fileUploadError1 , 'Only Photo or Image is allowed to be uploaded in this field.' , 'block');
	
		$fileRef.photo.type = true;

								return false;		}

			if (!$fileRef.photo.size) {

					this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadError11 , this.fileUploadProgress1]);

					this.$setButton(this.btnAddFile1 , false , 'btn-options' , 'disabled');	

				$btnRef.nativeElement.textContent = 'A file with name ' + $myFile.name + ' has been selected';	}		}	

			else { $btnRef.nativeElement.textContent = 'Choose a File';

							this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadError11 , this.fileUploadProgress1]);		}
}

		public chooseFile($event , $el) : void {

			this.$clearEvent($event);

			$el.click();
		}

		public $validateSignature(file : File , $fileRef) {

		const filereader = new FileReader();

		filereader.onloadend = (evt) => {

			if (evt.target.readyState === FileReader.DONE) {

				const uint = new Uint8Array(evt.target.result as ArrayBuffer);

				let bytes = [];

				uint.forEach((byte) => {	bytes.push(byte.toString(16))	});

				let hex = bytes.join('').toUpperCase();

				let signatureType = this.getTypeFromMagicNumber(hex);

			if (signatureType.indexOf('image') == -1) {

		this.$clearText([this.fileUploadMessage1 , this.fileUploadError1 , this.fileUploadError11 , this.fileUploadProgress1]);
	
		this.$setButton(this.btnAddFile1 , true , 'disabled' , 'btn-options');
	
		this.$setText(this.fileUploadError1 , 'Only Photo or Image is allowed to be uploaded in this field.' , 'block');
	
		$fileRef.photo.type = true;

					return false;	}		}	}

			if (file)	{

			const blob = file.slice(0 , 4);

			filereader.readAsArrayBuffer(blob);		}	

		}

}
