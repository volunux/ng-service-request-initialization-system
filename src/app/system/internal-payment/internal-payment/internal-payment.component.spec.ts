import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalPaymentComponent } from './internal-payment.component';

describe('InternalPaymentComponent', () => {
  let component: InternalPaymentComponent;
  let fixture: ComponentFixture<InternalPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
