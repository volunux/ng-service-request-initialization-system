import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThesisDashboardComponent } from './internal-thesis-dashboard.component';

describe('InternalThesisDashboardComponent', () => {
  let component: InternalThesisDashboardComponent;
  let fixture: ComponentFixture<InternalThesisDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThesisDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThesisDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
