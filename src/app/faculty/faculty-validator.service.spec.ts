import { TestBed } from '@angular/core/testing';

import { FacultyValidatorService } from './faculty-validator.service';

describe('FacultyValidatorService', () => {
  let service: FacultyValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
