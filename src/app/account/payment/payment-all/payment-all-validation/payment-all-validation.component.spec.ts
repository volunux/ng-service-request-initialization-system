import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAllValidationComponent } from './payment-all-validation.component';

describe('PaymentAllValidationComponent', () => {
  let component: PaymentAllValidationComponent;
  let fixture: ComponentFixture<PaymentAllValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAllValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAllValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
