import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalEntryDeleteAllComponent } from './general-internal-entry-delete-all.component';

describe('GeneralInternalEntryDeleteAllComponent', () => {
  let component: GeneralInternalEntryDeleteAllComponent;
  let fixture: ComponentFixture<GeneralInternalEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
