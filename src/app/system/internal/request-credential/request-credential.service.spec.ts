import { TestBed } from '@angular/core/testing';

import { RequestCredentialService } from './request-credential.service';

describe('RequestCredentialService', () => {
  let service: RequestCredentialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestCredentialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
