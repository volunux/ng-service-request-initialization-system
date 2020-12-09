import { TestBed } from '@angular/core/testing';

import { GeneralPaymentSearchQueryService } from './general-payment-search-query.service';

describe('GeneralPaymentSearchQueryService', () => {
  let service: GeneralPaymentSearchQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralPaymentSearchQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
