import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThesisEntriesComponent } from './internal-thesis-entries.component';

describe('InternalThesisEntriesComponent', () => {
  let component: InternalThesisEntriesComponent;
  let fixture: ComponentFixture<InternalThesisEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThesisEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThesisEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
