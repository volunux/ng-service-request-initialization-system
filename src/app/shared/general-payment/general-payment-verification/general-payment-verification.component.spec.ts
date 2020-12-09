import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentVerificationComponent } from './general-payment-verification.component';

describe('GeneralPaymentVerificationComponent', () => {
  let component: GeneralPaymentVerificationComponent;
  let fixture: ComponentFixture<GeneralPaymentVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
