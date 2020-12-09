import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentFormValidatorsComponent } from './general-payment-form-validators.component';

describe('GeneralPaymentFormValidatorsComponent', () => {
  let component: GeneralPaymentFormValidatorsComponent;
  let fixture: ComponentFixture<GeneralPaymentFormValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentFormValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentFormValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
