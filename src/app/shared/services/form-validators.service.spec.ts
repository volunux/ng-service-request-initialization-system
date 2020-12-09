import { TestBed } from '@angular/core/testing';

describe('FormValidatorsService', () => {
  let service: FormValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
