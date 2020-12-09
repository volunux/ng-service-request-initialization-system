import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalEntryDeleteAllComponent } from './internal-entry-delete-all.component';

describe('InternalEntryDeleteAllComponent', () => {
  let component: InternalEntryDeleteAllComponent;
  let fixture: ComponentFixture<InternalEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
