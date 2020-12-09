import { TestBed } from '@angular/core/testing';

import { InternalEntryUpdateGuard } from './internal-entry-update.guard';

describe('InternalEntryUpdateGuard', () => {
  let guard: InternalEntryUpdateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InternalEntryUpdateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
