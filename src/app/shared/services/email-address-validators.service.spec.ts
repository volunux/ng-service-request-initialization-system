import { TestBed } from '@angular/core/testing';

import { EmailAddressValidatorsService } from './email-address-validators.service';

describe('EmailAddressValidatorsService', () => {
  let service: EmailAddressValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailAddressValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
