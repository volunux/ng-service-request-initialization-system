import { TestBed } from '@angular/core/testing';

import { GeneralConversationFormService } from './general-conversation-form.service';

describe('GeneralConversationFormService', () => {
  let service: GeneralConversationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralConversationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
