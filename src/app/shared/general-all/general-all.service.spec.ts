import { TestBed } from '@angular/core/testing';

import { GeneralAllService } from './general-all.service';

describe('GeneralAllService', () => {
  let service: GeneralAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
