import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPaymentEntryCreateComponent } from './faculty-payment-entry-create.component';

describe('FacultyPaymentEntryCreateComponent', () => {
  let component: FacultyPaymentEntryCreateComponent;
  let fixture: ComponentFixture<FacultyPaymentEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPaymentEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyPaymentEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
