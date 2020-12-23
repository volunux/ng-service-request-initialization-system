import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationEntriesComponent } from './conversation-entries.component';

describe('ConversationEntriesComponent', () => {
  let component: ConversationEntriesComponent;
  let fixture: ComponentFixture<ConversationEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
