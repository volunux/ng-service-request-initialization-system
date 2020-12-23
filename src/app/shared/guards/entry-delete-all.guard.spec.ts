import { TestBed } from '@angular/core/testing';

import { EntryDeleteAllGuard } from './entry-delete-all.guard';

describe('EntryDeleteAllGuard', () => {
  let guard: EntryDeleteAllGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EntryDeleteAllGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
