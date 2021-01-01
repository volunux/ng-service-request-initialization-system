import { TestBed } from '@angular/core/testing';

import { GeneralThesisFormService } from './general-thesis-form.service';

describe('GeneralThesisFormService', () => {
  let service: GeneralThesisFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralThesisFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
