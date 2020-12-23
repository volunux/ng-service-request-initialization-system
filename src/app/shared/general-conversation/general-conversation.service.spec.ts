import { TestBed } from '@angular/core/testing';

import { GeneralConversationService } from './general-conversation.service';

describe('GeneralConversationService', () => {
  let service: GeneralConversationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralConversationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
