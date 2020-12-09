import { TestBed } from '@angular/core/testing';

import { GeneralSearchValidatorsService } from './general-search-validators.service';

describe('GeneralSearchValidatorsService', () => {
  let service: GeneralSearchValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralSearchValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
