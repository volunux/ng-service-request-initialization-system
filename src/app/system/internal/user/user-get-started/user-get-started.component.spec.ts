import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetStartedComponent } from './user-get-started.component';

describe('UserGetStartedComponent', () => {
  let component: UserGetStartedComponent;
  let fixture: ComponentFixture<UserGetStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGetStartedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
