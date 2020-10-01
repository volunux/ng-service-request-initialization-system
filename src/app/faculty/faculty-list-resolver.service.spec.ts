import { TestBed } from '@angular/core/testing';

import { FacultyListResolverService } from './faculty-list-resolver.service';

describe('FacultyListResolverService', () => {
  let service: FacultyListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
