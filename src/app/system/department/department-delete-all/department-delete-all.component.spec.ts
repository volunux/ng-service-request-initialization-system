import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDeleteAllComponent } from './department-delete-all.component';

describe('DepartmentDeleteAllComponent', () => {
  let component: DepartmentDeleteAllComponent;
  let fixture: ComponentFixture<DepartmentDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
