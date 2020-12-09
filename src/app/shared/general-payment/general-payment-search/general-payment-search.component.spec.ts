import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentSearchComponent } from './general-payment-search.component';

describe('GeneralPaymentSearchComponent', () => {
  let component: GeneralPaymentSearchComponent;
  let fixture: ComponentFixture<GeneralPaymentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
