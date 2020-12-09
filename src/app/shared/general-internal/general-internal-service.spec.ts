import { TestBed } from '@angular/core/testing';

import { GeneralInternalService } from './general-internal.service';

describe('GeneralInternalService', () => {
  let service: GeneralInternalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralInternalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
