import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConversationEntryDeleteComponent } from './general-conversation-entry-delete.component';

describe('GeneralConversationEntryDeleteComponent', () => {
  let component: GeneralConversationEntryDeleteComponent;
  let fixture: ComponentFixture<GeneralConversationEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralConversationEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralConversationEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
