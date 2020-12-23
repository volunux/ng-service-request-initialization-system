import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationEntryDeleteComponent } from './conversation-entry-delete.component';

describe('ConversationEntryDeleteComponent', () => {
  let component: ConversationEntryDeleteComponent;
  let fixture: ComponentFixture<ConversationEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
