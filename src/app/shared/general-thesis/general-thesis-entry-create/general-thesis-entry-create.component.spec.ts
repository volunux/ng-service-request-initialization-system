import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralThesisEntryCreateComponent } from './general-thesis-entry-create.component';

describe('GeneralThesisEntryCreateComponent', () => {
  let component: GeneralThesisEntryCreateComponent;
  let fixture: ComponentFixture<GeneralThesisEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralThesisEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralThesisEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
