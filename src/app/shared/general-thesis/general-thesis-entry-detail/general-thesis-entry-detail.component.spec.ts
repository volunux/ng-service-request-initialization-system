import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralThesisEntryDetailComponent } from './general-thesis-entry-detail.component';

describe('GeneralThesisEntryDetailComponent', () => {
  let component: GeneralThesisEntryDetailComponent;
  let fixture: ComponentFixture<GeneralThesisEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralThesisEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralThesisEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
