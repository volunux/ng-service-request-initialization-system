import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFormValidatorsComponent } from './general-form-validators.component';

describe('GeneralFormValidatorsComponent', () => {
  let component: GeneralFormValidatorsComponent;
  let fixture: ComponentFixture<GeneralFormValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralFormValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralFormValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
