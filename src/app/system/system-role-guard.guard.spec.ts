import { TestBed } from '@angular/core/testing';

import { SystemRoleGuardGuard } from './system-role-guard.guard';

describe('SystemRoleGuardGuard', () => {
  let guard: SystemRoleGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SystemRoleGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
