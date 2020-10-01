import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyValidatorComponent } from './faculty-validator.component';

describe('FacultyValidatorComponent', () => {
  let component: FacultyValidatorComponent;
  let fixture: ComponentFixture<FacultyValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
