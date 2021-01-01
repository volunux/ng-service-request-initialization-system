import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThesisEntryDeleteAllComponent } from './internal-thesis-entry-delete-all.component';

describe('InternalThesisEntryDeleteAllComponent', () => {
  let component: InternalThesisEntryDeleteAllComponent;
  let fixture: ComponentFixture<InternalThesisEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThesisEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThesisEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
