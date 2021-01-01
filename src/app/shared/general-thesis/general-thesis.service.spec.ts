import { TestBed } from '@angular/core/testing';

import { GeneralThesisService } from './general-thesis.service';

describe('GeneralThesisService', () => {
  let service: GeneralThesisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralThesisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
