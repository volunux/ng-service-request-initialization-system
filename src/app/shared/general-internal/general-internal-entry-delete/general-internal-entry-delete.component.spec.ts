import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalEntryDeleteComponent } from './general-internal-entry-delete.component';

describe('GeneralInternalEntryDeleteComponent', () => {
  let component: GeneralInternalEntryDeleteComponent;
  let fixture: ComponentFixture<GeneralInternalEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
