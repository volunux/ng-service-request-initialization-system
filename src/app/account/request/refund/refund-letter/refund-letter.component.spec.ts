import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundLetterComponent } from './refund-letter.component';

describe('RefundLetterComponent', () => {
  let component: RefundLetterComponent;
  let fixture: ComponentFixture<RefundLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
