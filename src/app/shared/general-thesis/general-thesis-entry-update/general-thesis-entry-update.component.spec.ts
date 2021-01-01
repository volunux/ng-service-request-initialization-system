import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralThesisEntryUpdateComponent } from './general-thesis-entry-update.component';

describe('GeneralThesisEntryUpdateComponent', () => {
  let component: GeneralThesisEntryUpdateComponent;
  let fixture: ComponentFixture<GeneralThesisEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralThesisEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralThesisEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
