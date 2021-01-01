import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralThesisFormInputsComponent } from './general-thesis-form-inputs.component';

describe('GeneralThesisFormInputsComponent', () => {
  let component: GeneralThesisFormInputsComponent;
  let fixture: ComponentFixture<GeneralThesisFormInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralThesisFormInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralThesisFormInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
