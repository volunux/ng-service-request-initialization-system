import { TestBed } from '@angular/core/testing';

import { RequestLimitFormService } from './request-limit-form.service';

describe('RequestLimitFormService', () => {
  let service: RequestLimitFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestLimitFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
