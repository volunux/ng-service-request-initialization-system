import { TestBed } from '@angular/core/testing';

import { GeneralPaymentFormValidatorsService } from './general-payment-form-validators.service';

describe('GeneralPaymentFormValidatorsService', () => {
  let service: GeneralPaymentFormValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralPaymentFormValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
