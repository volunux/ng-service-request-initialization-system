import { TestBed } from '@angular/core/testing';

import { GenerateUsernamePasswordService } from './generate-username-password.service';

describe('GenerateUsernamePasswordService', () => {
  let service: GenerateUsernamePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateUsernamePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
