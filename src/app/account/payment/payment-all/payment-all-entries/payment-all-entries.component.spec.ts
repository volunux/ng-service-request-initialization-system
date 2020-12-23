import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAllEntriesComponent } from './payment-all-entries.component';

describe('PaymentAllEntriesComponent', () => {
  let component: PaymentAllEntriesComponent;
  let fixture: ComponentFixture<PaymentAllEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAllEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAllEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
