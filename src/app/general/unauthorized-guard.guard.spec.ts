import { TestBed } from '@angular/core/testing';

import { UnauthorizedGuardGuard } from './unauthorized-guard.guard';

describe('UnauthorizedGuardGuard', () => {
  let guard: UnauthorizedGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnauthorizedGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
