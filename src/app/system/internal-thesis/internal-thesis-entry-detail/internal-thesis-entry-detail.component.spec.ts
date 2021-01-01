import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThesisEntryDetailComponent } from './internal-thesis-entry-detail.component';

describe('InternalThesisEntryDetailComponent', () => {
  let component: InternalThesisEntryDetailComponent;
  let fixture: ComponentFixture<InternalThesisEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThesisEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThesisEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
