import { TestBed } from '@angular/core/testing';

import { FacultyDeleteResolverService } from './faculty-delete-resolver.service';

describe('FacultyDeleteResolverService', () => {
  let service: FacultyDeleteResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyDeleteResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
