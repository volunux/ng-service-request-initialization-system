import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAllDeleteAllComponent } from './request-all-delete-all.component';

describe('RequestAllDeleteAllComponent', () => {
  let component: RequestAllDeleteAllComponent;
  let fixture: ComponentFixture<RequestAllDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAllDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAllDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
