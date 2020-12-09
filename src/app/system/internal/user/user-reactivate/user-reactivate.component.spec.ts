import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactivateComponent } from './user-reactivate.component';

describe('UserReactivateComponent', () => {
  let component: UserReactivateComponent;
  let fixture: ComponentFixture<UserReactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
