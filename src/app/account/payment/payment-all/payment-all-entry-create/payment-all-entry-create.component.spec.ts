import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAllEntryCreateComponent } from './payment-all-entry-create.component';

describe('PaymentAllEntryCreateComponent', () => {
  let component: PaymentAllEntryCreateComponent;
  let fixture: ComponentFixture<PaymentAllEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAllEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAllEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
