import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPaymentEntryCreateComponent } from './department-payment-entry-create.component';

describe('DepartmentPaymentEntryCreateComponent', () => {
  let component: DepartmentPaymentEntryCreateComponent;
  let fixture: ComponentFixture<DepartmentPaymentEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentPaymentEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentPaymentEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
