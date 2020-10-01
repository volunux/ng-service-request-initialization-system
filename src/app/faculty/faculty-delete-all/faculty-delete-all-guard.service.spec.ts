import { TestBed } from '@angular/core/testing';

import { FacultyDeleteAllGuardService } from './faculty-delete-all-guard.service';

describe('FacultyDeleteAllGuardService', () => {
  let service: FacultyDeleteAllGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyDeleteAllGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
