import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalEntryDashboardComponent } from './internal-entry-dashboard.component';

describe('InternalEntryDashboardComponent', () => {
  let component: InternalEntryDashboardComponent;
  let fixture: ComponentFixture<InternalEntryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalEntryDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalEntryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
