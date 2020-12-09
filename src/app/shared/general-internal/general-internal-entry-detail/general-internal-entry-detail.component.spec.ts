import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalEntryDetailComponent } from './general-internal-entry-detail.component';

describe('GeneralInternalEntryDetailComponent', () => {
  let component: GeneralInternalEntryDetailComponent;
  let fixture: ComponentFixture<GeneralInternalEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
