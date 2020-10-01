import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyGetStartedComponent } from './faculty-get-started.component';

describe('FacultyGetStartedComponent', () => {
  let component: FacultyGetStartedComponent;
  let fixture: ComponentFixture<FacultyGetStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyGetStartedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
