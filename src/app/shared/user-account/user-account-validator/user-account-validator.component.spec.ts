import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountValidatorComponent } from './user-account-validator.component';

describe('UserAccountValidatorComponent', () => {
  let component: UserAccountValidatorComponent;
  let fixture: ComponentFixture<UserAccountValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
