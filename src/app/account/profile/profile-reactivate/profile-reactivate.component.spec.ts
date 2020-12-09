import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReactivateComponent } from './profile-reactivate.component';

describe('ProfileReactivateComponent', () => {
  let component: ProfileReactivateComponent;
  let fixture: ComponentFixture<ProfileReactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileReactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
