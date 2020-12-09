import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalEntryDeleteComponent } from './internal-entry-delete.component';

describe('InternalEntryDeleteComponent', () => {
  let component: InternalEntryDeleteComponent;
  let fixture: ComponentFixture<InternalEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
