import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryDetailComponent } from './request-entry-detail.component';

describe('RequestEntryDetailComponent', () => {
  let component: RequestEntryDetailComponent;
  let fixture: ComponentFixture<RequestEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
