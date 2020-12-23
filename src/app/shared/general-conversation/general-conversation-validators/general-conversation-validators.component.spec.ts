import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConversationValidatorsComponent } from './general-conversation-validators.component';

describe('GeneralConversationValidatorsComponent', () => {
  let component: GeneralConversationValidatorsComponent;
  let fixture: ComponentFixture<GeneralConversationValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralConversationValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralConversationValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
