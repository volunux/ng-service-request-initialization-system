import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileValidatorComponent } from './profile-validator.component';

describe('ProfileValidatorComponent', () => {
  let component: ProfileValidatorComponent;
  let fixture: ComponentFixture<ProfileValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
