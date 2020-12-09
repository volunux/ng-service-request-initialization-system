import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalEntriesComponent } from './general-internal-entries.component';

describe('GeneralInternalEntriesComponent', () => {
  let component: GeneralInternalEntriesComponent;
  let fixture: ComponentFixture<GeneralInternalEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
