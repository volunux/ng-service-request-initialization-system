import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalEntryUpdateComponent } from './internal-entry-update.component';

describe('InternalEntryUpdateComponent', () => {
  let component: InternalEntryUpdateComponent;
  let fixture: ComponentFixture<InternalEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
