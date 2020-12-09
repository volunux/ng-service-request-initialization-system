import { TestBed } from '@angular/core/testing';

import { EntryUpdateDialogService } from './entry-update-dialog.service';

describe('EntryUpdateDialogService', () => {
  let service: EntryUpdateDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryUpdateDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
