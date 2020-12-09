import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentCreateComponent } from './general-payment-create.component';

describe('GeneralPaymentCreateComponent', () => {
  let component: GeneralPaymentCreateComponent;
  let fixture: ComponentFixture<GeneralPaymentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
