import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationEntryDeleteAllComponent } from './conversation-entry-delete-all.component';

describe('ConversationEntryDeleteAllComponent', () => {
  let component: ConversationEntryDeleteAllComponent;
  let fixture: ComponentFixture<ConversationEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
