import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryCommentComponent } from './request-entry-comment.component';

describe('RequestEntryCommentComponent', () => {
  let component: RequestEntryCommentComponent;
  let fixture: ComponentFixture<RequestEntryCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
