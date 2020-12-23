import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAllEntryComponent } from './request-all-entry.component';

describe('RequestAllEntryComponent', () => {
  let component: RequestAllEntryComponent;
  let fixture: ComponentFixture<RequestAllEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAllEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAllEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
