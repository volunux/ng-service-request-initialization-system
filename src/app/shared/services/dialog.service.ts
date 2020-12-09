import { Injectable } from '@angular/core';

import { Observable , of } from 'rxjs';

@Injectable()

export class DialogService {

  constructor() { 

  }

  public confirm(message? : string) : Observable<boolean> {

  	const confirmation = window.confirm(message || 'Is it OK?');

  	return of(confirmation);
  }

}
