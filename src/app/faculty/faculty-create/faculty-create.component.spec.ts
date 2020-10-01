import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCreateComponent } from './faculty-create.component';

describe('FacultyCreateComponent', () => {
  let component: FacultyCreateComponent;
  let fixture: ComponentFixture<FacultyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
