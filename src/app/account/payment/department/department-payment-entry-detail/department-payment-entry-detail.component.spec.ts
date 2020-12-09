import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPaymentEntryDetailComponent } from './department-payment-entry-detail.component';

describe('DepartmentPaymentEntryDetailComponent', () => {
  let component: DepartmentPaymentEntryDetailComponent;
  let fixture: ComponentFixture<DepartmentPaymentEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentPaymentEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentPaymentEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
