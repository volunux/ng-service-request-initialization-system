import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDeactivateComponent } from './profile-deactivate.component';

describe('ProfileDeactivateComponent', () => {
  let component: ProfileDeactivateComponent;
  let fixture: ComponentFixture<ProfileDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDeactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
