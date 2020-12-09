import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalFormValidatorsComponent } from './general-internal-form-validators.component';

describe('GeneralInternalFormValidatorsComponent', () => {
  let component: GeneralInternalFormValidatorsComponent;
  let fixture: ComponentFixture<GeneralInternalFormValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalFormValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalFormValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
