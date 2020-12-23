import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryReplyComponent } from './request-entry-reply.component';

describe('RequestEntryReplyComponent', () => {
  let component: RequestEntryReplyComponent;
  let fixture: ComponentFixture<RequestEntryReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
