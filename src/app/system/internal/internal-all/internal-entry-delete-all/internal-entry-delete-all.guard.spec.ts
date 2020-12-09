import { TestBed } from '@angular/core/testing';

import { InternalEntryDeleteAllGuard } from './internal-entry-delete-all.guard';

describe('InternalEntryDeleteAllGuard', () => {
  let guard: InternalEntryDeleteAllGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InternalEntryDeleteAllGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
