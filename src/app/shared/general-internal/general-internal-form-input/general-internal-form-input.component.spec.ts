import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalFormInputComponent } from './general-internal-form-input.component';

describe('GeneralInternalFormInputComponent', () => {
  let component: GeneralInternalFormInputComponent;
  let fixture: ComponentFixture<GeneralInternalFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
