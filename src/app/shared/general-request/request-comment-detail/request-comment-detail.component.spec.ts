import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCommentDetailComponent } from './request-comment-detail.component';

describe('RequestCommentDetailComponent', () => {
  let component: RequestCommentDetailComponent;
  let fixture: ComponentFixture<RequestCommentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCommentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCommentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
