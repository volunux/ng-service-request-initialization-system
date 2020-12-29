import { TestBed } from '@angular/core/testing';

import { FroalaEditorService } from './froala-editor.service';

describe('FroalaEditorService', () => {
  let service: FroalaEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FroalaEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
