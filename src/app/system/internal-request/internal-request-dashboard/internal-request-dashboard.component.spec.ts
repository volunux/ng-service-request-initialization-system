import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalRequestDashboardComponent } from './internal-request-dashboard.component';

describe('InternalRequestDashboardComponent', () => {
  let component: InternalRequestDashboardComponent;
  let fixture: ComponentFixture<InternalRequestDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalRequestDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalRequestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
