import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLimitEntryDetailComponent } from './request-limit-entry-detail.component';

describe('RequestLimitEntryDetailComponent', () => {
  let component: RequestLimitEntryDetailComponent;
  let fixture: ComponentFixture<RequestLimitEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLimitEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLimitEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
