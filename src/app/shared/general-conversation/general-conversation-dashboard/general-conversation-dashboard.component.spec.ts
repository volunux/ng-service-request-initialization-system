import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConversationDashboardComponent } from './general-conversation-dashboard.component';

describe('GeneralConversationDashboardComponent', () => {
  let component: GeneralConversationDashboardComponent;
  let fixture: ComponentFixture<GeneralConversationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralConversationDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralConversationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
