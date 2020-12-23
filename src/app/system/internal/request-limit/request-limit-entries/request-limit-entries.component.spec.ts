import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLimitEntriesComponent } from './request-limit-entries.component';

describe('RequestLimitEntriesComponent', () => {
  let component: RequestLimitEntriesComponent;
  let fixture: ComponentFixture<RequestLimitEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLimitEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLimitEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
