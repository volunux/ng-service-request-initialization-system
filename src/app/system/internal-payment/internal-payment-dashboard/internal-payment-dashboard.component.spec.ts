import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalPaymentDashboardComponent } from './internal-payment-dashboard.component';

describe('InternalPaymentDashboardComponent', () => {
  let component: InternalPaymentDashboardComponent;
  let fixture: ComponentFixture<InternalPaymentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalPaymentDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalPaymentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
