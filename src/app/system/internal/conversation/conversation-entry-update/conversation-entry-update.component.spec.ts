import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationEntryUpdateComponent } from './conversation-entry-update.component';

describe('ConversationEntryUpdateComponent', () => {
  let component: ConversationEntryUpdateComponent;
  let fixture: ComponentFixture<ConversationEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
