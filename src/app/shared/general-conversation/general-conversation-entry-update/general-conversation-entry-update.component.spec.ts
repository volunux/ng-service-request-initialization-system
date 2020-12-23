import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConversationEntryUpdateComponent } from './general-conversation-entry-update.component';

describe('GeneralConversationEntryUpdateComponent', () => {
  let component: GeneralConversationEntryUpdateComponent;
  let fixture: ComponentFixture<GeneralConversationEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralConversationEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralConversationEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
