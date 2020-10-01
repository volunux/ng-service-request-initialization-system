import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDeleteAllComponent } from './faculty-delete-all.component';

describe('FacultyDeleteAllComponent', () => {
  let component: FacultyDeleteAllComponent;
  let fixture: ComponentFixture<FacultyDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
