import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalEntryUpdateComponent } from './general-internal-entry-update.component';

describe('GeneralInternalEntryUpdateComponent', () => {
  let component: GeneralInternalEntryUpdateComponent;
  let fixture: ComponentFixture<GeneralInternalEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
