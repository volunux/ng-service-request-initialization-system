import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationEntryDetailComponent } from './conversation-entry-detail.component';

describe('ConversationEntryDetailComponent', () => {
  let component: ConversationEntryDetailComponent;
  let fixture: ComponentFixture<ConversationEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
