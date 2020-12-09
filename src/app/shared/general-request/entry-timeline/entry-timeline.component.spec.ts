import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryTimelineComponent } from './entry-timeline.component';

describe('EntryTimelineComponent', () => {
  let component: EntryTimelineComponent;
  let fixture: ComponentFixture<EntryTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
