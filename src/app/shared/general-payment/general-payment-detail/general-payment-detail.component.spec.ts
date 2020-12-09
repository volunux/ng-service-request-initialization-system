import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentDetailComponent } from './general-payment-detail.component';

describe('GeneralPaymentDetailComponent', () => {
  let component: GeneralPaymentDetailComponent;
  let fixture: ComponentFixture<GeneralPaymentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
