import { TestBed } from '@angular/core/testing';

import { RequestLimitService } from './request-limit.service';

describe('RequestLimitService', () => {
  let service: RequestLimitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestLimitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
