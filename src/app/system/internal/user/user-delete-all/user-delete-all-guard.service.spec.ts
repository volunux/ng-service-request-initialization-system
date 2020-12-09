import { TestBed } from '@angular/core/testing';

import { UserDeleteAllGuardService } from './user-delete-all-guard.service';

describe('UserDeleteAllGuardService', () => {
  let service: UserDeleteAllGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDeleteAllGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
