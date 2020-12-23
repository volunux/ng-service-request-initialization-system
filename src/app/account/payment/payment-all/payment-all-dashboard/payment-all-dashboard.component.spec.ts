import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAllDashboardComponent } from './payment-all-dashboard.component';

describe('PaymentAllDashboardComponent', () => {
  let component: PaymentAllDashboardComponent;
  let fixture: ComponentFixture<PaymentAllDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAllDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAllDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
