import { Injectable } from '@angular/core';

@Injectable()

export class ProfileFileControlService {

  constructor() { 

  }

 public $controls : any = [

  	{'label' : 'Profile Photo' ,

  	'key' : 'profilePhoto' ,

  	'accepts' : 'image/*' ,

  	'controlType' : 'file' } ,

  	{'label' : 'Signature' ,

  	'key' : 'signature' ,

  	'accepts' : 'image/*' ,

		'controlType' : 'file' }

  ];


}
