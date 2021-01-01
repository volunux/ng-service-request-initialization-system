import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThesisEntryDeleteComponent } from './internal-thesis-entry-delete.component';

describe('InternalThesisEntryDeleteComponent', () => {
  let component: InternalThesisEntryDeleteComponent;
  let fixture: ComponentFixture<InternalThesisEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThesisEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThesisEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
