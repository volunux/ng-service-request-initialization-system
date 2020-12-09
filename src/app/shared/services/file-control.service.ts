import { Injectable } from '@angular/core';

@Injectable()

export class FileControlService {

  constructor() { 

  }

 public $controls : any = [

  	{'label' : 'Photo I' ,

  	'key' : 'photos' ,

  	'accepts' : 'image/*' ,

  	'controlType' : 'file' } ,

    {'label' : 'Photo II' ,

    'key' : 'photos' ,

    'accepts' : 'image/*' ,

    'controlType' : 'file' } ,

    {'label' : 'Photo III' ,

    'key' : 'photos' ,

    'accepts' : 'image/*' ,

    'controlType' : 'file' } ,

    {'label' : 'Photo IV' ,

    'key' : 'photos' ,

    'accepts' : 'image/*' ,

    'controlType' : 'file' } ,

  ];


}
