import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPaymentEntriesComponent } from './faculty-payment-entries.component';

describe('FacultyPaymentEntriesComponent', () => {
  let component: FacultyPaymentEntriesComponent;
  let fixture: ComponentFixture<FacultyPaymentEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPaymentEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyPaymentEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
