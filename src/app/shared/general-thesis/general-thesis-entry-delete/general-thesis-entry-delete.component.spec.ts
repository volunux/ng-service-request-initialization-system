import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralThesisEntryDeleteComponent } from './general-thesis-entry-delete.component';

describe('GeneralThesisEntryDeleteComponent', () => {
  let component: GeneralThesisEntryDeleteComponent;
  let fixture: ComponentFixture<GeneralThesisEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralThesisEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralThesisEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
