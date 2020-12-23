import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAllDeleteAllComponent } from './payment-all-delete-all.component';

describe('PaymentAllDeleteAllComponent', () => {
  let component: PaymentAllDeleteAllComponent;
  let fixture: ComponentFixture<PaymentAllDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAllDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAllDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
