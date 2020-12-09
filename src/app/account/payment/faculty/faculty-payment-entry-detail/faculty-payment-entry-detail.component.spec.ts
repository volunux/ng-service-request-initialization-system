import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPaymentEntryDetailComponent } from './faculty-payment-entry-detail.component';

describe('FacultyPaymentEntryDetailComponent', () => {
  let component: FacultyPaymentEntryDetailComponent;
  let fixture: ComponentFixture<FacultyPaymentEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPaymentEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyPaymentEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
