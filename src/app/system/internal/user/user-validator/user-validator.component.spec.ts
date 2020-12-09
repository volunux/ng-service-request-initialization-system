import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserValidatorComponent } from './user-validator.component';

describe('UserValidatorComponent', () => {
  let component: UserValidatorComponent;
  let fixture: ComponentFixture<UserValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
