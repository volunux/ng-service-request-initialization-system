import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLimitFormValidatorsComponent } from './request-limit-form-validators.component';

describe('RequestLimitFormValidatorsComponent', () => {
  let component: RequestLimitFormValidatorsComponent;
  let fixture: ComponentFixture<RequestLimitFormValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLimitFormValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLimitFormValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
