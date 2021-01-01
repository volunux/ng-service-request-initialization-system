import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThesisComponent } from './internal-thesis.component';

describe('InternalThesisComponent', () => {
  let component: InternalThesisComponent;
  let fixture: ComponentFixture<InternalThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
