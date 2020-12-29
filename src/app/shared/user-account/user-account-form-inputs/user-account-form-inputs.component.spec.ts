import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountFormInputsComponent } from './user-account-form-inputs.component';

describe('UserAccountFormInputsComponent', () => {
  let component: UserAccountFormInputsComponent;
  let fixture: ComponentFixture<UserAccountFormInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountFormInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountFormInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
