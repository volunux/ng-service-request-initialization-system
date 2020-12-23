import { TestBed } from '@angular/core/testing';

import { SimplesService } from './simples.service';

describe('SimplesService', () => {
  let service: SimplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
