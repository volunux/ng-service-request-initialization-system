import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPaymentEntriesComponent } from './department-payment-entries.component';

describe('DepartmentPaymentEntriesComponent', () => {
  let component: DepartmentPaymentEntriesComponent;
  let fixture: ComponentFixture<DepartmentPaymentEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentPaymentEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentPaymentEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
