import { Injectable } from '@angular/core';

import { ErrorMessage } from '../general/error-message';

import { Errors } from './general-errors';

@Injectable({

  'providedIn' : 'root'

})

export class ErrorMessagesService {

	private errorMessages = Errors;

  constructor() { 

  }

  get message() : any {

  		return this.errorMessages.search;
  }

  set message(errors : any) {

  	this.errorMessages.search = errors;

  	this.errorMessages.search.statusText = errors.statusText;
  }

}
