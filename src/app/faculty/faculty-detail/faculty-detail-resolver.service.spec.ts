import { TestBed } from '@angular/core/testing';

import { FacultyDetailResolverService } from './faculty-detail-resolver.service';

describe('FacultyDetailResolverService', () => {
  let service: FacultyDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
