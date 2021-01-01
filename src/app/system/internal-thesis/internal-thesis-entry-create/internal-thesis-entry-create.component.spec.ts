import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThesisEntryCreateComponent } from './internal-thesis-entry-create.component';

describe('InternalThesisEntryCreateComponent', () => {
  let component: InternalThesisEntryCreateComponent;
  let fixture: ComponentFixture<InternalThesisEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThesisEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThesisEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
