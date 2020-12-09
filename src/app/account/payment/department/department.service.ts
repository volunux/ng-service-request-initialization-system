import { Injectable , Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Api_Token , Api } from '../../../configuration';

import { General } from '../../../shared/interfaces/general';

import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

import { AuthenticationService } from '../../../authentication/authentication.service';

@Injectable()

export class DepartmentService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , private ems : ErrorMessagesService ,

  						private as : AuthenticationService) { 

  }

  public $systemType : string;

  public $sa : string; 

}
