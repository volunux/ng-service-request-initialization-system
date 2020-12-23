import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAllDashboardComponent } from './request-all-dashboard.component';

describe('RequestAllDashboardComponent', () => {
  let component: RequestAllDashboardComponent;
  let fixture: ComponentFixture<RequestAllDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAllDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAllDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
