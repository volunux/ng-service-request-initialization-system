import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLimitEntryUpdateComponent } from './request-limit-entry-update.component';

describe('RequestLimitEntryUpdateComponent', () => {
  let component: RequestLimitEntryUpdateComponent;
  let fixture: ComponentFixture<RequestLimitEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLimitEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLimitEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
