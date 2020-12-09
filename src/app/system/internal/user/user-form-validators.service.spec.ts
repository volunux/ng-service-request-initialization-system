import { TestBed } from '@angular/core/testing';

import { UserFormValidatorsService } from './user-form-validators.service';

describe('UserFormValidatorsService', () => {
  let service: UserFormValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFormValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
