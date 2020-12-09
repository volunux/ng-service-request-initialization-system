import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalDepartmentEntriesComponent } from './internal-department-entries.component';

describe('InternalDepartmentEntriesComponent', () => {
  let component: InternalDepartmentEntriesComponent;
  let fixture: ComponentFixture<InternalDepartmentEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalDepartmentEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalDepartmentEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
