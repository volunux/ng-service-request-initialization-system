import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInputFieldsComponent } from './profile-input-fields.component';

describe('ProfileInputFieldsComponent', () => {
  let component: ProfileInputFieldsComponent;
  let fixture: ComponentFixture<ProfileInputFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInputFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
