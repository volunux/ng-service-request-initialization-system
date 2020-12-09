import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPaymentValidationComponent } from './faculty-payment-validation.component';

describe('FacultyPaymentValidationComponent', () => {
  let component: FacultyPaymentValidationComponent;
  let fixture: ComponentFixture<FacultyPaymentValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPaymentValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyPaymentValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
