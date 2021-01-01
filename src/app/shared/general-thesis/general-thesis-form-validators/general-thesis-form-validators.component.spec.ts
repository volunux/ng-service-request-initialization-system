import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralThesisFormValidatorsComponent } from './general-thesis-form-validators.component';

describe('GeneralThesisFormValidatorsComponent', () => {
  let component: GeneralThesisFormValidatorsComponent;
  let fixture: ComponentFixture<GeneralThesisFormValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralThesisFormValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralThesisFormValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
