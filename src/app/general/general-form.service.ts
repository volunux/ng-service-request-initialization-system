import { Injectable } from '@angular/core';

import { FormControl } from '@angular/forms';

import { searchValidator } from '../shared/services/form-validators.service';

import { General } from './general';

@Injectable()

export class GeneralFormService {

  constructor() { 

  }

  public searchForm(searchFilters? : General ) : FormControl {

    return new FormControl('' , [searchValidator(searchFilters)]);

  }

}
