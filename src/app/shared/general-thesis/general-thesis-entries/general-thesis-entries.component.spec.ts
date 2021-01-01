import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralThesisEntriesComponent } from './general-thesis-entries.component';

describe('GeneralThesisEntriesComponent', () => {
  let component: GeneralThesisEntriesComponent;
  let fixture: ComponentFixture<GeneralThesisEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralThesisEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralThesisEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
