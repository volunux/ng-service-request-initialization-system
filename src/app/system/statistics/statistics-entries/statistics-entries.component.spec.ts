import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsEntriesComponent } from './statistics-entries.component';

describe('StatisticsEntriesComponent', () => {
  let component: StatisticsEntriesComponent;
  let fixture: ComponentFixture<StatisticsEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
