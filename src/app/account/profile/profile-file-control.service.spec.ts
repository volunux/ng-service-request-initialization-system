import { TestBed } from '@angular/core/testing';

import { ProfileFileControlService } from './profile-file-control.service';

describe('ProfileFileControlService', () => {
  let service: ProfileFileControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileFileControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
