import { TestBed } from '@angular/core/testing';

import { GeneralPaymentService } from './general-payment.service';

describe('GeneralPaymentService', () => {
  let service: GeneralPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
