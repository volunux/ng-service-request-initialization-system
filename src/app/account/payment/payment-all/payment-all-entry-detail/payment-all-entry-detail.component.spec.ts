import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAllEntryDetailComponent } from './payment-all-entry-detail.component';

describe('PaymentAllEntryDetailComponent', () => {
  let component: PaymentAllEntryDetailComponent;
  let fixture: ComponentFixture<PaymentAllEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAllEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAllEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
