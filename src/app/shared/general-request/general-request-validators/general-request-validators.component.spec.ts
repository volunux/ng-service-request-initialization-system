import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestValidatorsComponent } from './general-request-validators.component';

describe('GeneralRequestValidatorsComponent', () => {
  let component: GeneralRequestValidatorsComponent;
  let fixture: ComponentFixture<GeneralRequestValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
