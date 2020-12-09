import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteAllComponent } from './user-delete-all.component';

describe('UserDeleteAllComponent', () => {
  let component: UserDeleteAllComponent;
  let fixture: ComponentFixture<UserDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
