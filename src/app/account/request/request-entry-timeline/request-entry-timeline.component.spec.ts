import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryTimelineComponent } from './request-entry-timeline.component';

describe('RequestEntryTimelineComponent', () => {
  let component: RequestEntryTimelineComponent;
  let fixture: ComponentFixture<RequestEntryTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
