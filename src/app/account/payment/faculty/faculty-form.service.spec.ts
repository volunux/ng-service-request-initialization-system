import { TestBed } from '@angular/core/testing';

import { FacultyFormService } from './faculty-form.service';

describe('FacultyFormService', () => {
  let service: FacultyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
