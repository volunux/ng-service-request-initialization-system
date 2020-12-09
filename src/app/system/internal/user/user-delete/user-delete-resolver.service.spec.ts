import { TestBed } from '@angular/core/testing';

import { UserDeleteResolverService } from './user-delete-resolver.service';

describe('UserDeleteResolverService', () => {
  let service: UserDeleteResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDeleteResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
