import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConversationEntryDetailComponent } from './general-conversation-entry-detail.component';

describe('GeneralConversationEntryDetailComponent', () => {
  let component: GeneralConversationEntryDetailComponent;
  let fixture: ComponentFixture<GeneralConversationEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralConversationEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralConversationEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
