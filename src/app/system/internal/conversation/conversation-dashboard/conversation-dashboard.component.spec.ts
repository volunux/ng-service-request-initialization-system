import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationDashboardComponent } from './conversation-dashboard.component';

describe('ConversationDashboardComponent', () => {
  let component: ConversationDashboardComponent;
  let fixture: ComponentFixture<ConversationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
