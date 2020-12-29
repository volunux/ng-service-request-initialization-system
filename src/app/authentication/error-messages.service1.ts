import { Injectable } from '@angular/core';

import { ErrorMessage } from '../shared/interfaces/error-message';

import { Errors } from '../shared/interfaces/general-errors';

@Injectable({

  'providedIn' : 'root'
})

export class ErrorMessagesService1 {

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
