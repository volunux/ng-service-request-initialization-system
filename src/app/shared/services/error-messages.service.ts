import { Injectable } from '@angular/core';

import { ErrorMessage } from '../interfaces/error-message';

import { Errors } from '../interfaces/general-errors';

@Injectable()

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
