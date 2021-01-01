import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThesisEntryUpdateComponent } from './internal-thesis-entry-update.component';

describe('InternalThesisEntryUpdateComponent', () => {
  let component: InternalThesisEntryUpdateComponent;
  let fixture: ComponentFixture<InternalThesisEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThesisEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThesisEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
