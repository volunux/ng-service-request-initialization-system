import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalEntryCreateComponent } from './general-internal-entry-create.component';

describe('GeneralInternalEntryCreateComponent', () => {
  let component: GeneralInternalEntryCreateComponent;
  let fixture: ComponentFixture<GeneralInternalEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
