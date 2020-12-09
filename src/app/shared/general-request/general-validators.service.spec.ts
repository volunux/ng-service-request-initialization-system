import { TestBed } from '@angular/core/testing';

import { GeneralValidatorsService } from './general-validators.service';

describe('GeneralValidatorsService', () => {
  let service: GeneralValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
