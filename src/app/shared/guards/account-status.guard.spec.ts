import { TestBed } from '@angular/core/testing';

import { AccountStatusGuard } from './account-status.guard';

describe('AccountStatusGuard', () => {
  let guard: AccountStatusGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccountStatusGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
