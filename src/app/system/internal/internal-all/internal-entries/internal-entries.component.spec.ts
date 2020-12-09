import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalEntriesComponent } from './internal-entries.component';

describe('InternalEntriesComponent', () => {
  let component: InternalEntriesComponent;
  let fixture: ComponentFixture<InternalEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
