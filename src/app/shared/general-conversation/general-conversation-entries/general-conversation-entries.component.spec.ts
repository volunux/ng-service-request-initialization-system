import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConversationEntriesComponent } from './general-conversation-entries.component';

describe('GeneralConversationEntriesComponent', () => {
  let component: GeneralConversationEntriesComponent;
  let fixture: ComponentFixture<GeneralConversationEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralConversationEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralConversationEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
