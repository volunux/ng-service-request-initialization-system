import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntriesComponent } from './request-entries.component';

describe('RequestEntriesComponent', () => {
  let component: RequestEntriesComponent;
  let fixture: ComponentFixture<RequestEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
