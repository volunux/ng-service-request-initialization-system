import { TestBed } from '@angular/core/testing';

import { HaveLoggedInGuard } from './have-logged-in.guard';

describe('HaveLoggedInGuard', () => {
  let guard: HaveLoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HaveLoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
