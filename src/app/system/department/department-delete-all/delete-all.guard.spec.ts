import { TestBed } from '@angular/core/testing';

import { DeleteAllGuard } from './delete-all.guard';

describe('DeleteAllGuard', () => {
  let guard: DeleteAllGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeleteAllGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
