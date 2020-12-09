import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalEntryComponent } from './internal-entry.component';

describe('InternalEntryComponent', () => {
  let component: InternalEntryComponent;
  let fixture: ComponentFixture<InternalEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
