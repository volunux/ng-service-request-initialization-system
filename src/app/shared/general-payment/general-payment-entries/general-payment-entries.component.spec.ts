import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentEntriesComponent } from './general-payment-entries.component';

describe('GeneralPaymentEntriesComponent', () => {
  let component: GeneralPaymentEntriesComponent;
  let fixture: ComponentFixture<GeneralPaymentEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
