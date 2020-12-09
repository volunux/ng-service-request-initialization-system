import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentUpdateComponent } from './general-payment-update.component';

describe('GeneralPaymentUpdateComponent', () => {
  let component: GeneralPaymentUpdateComponent;
  let fixture: ComponentFixture<GeneralPaymentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
