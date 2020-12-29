import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundEditorComponent } from './refund-editor.component';

describe('RefundEditorComponent', () => {
  let component: RefundEditorComponent;
  let fixture: ComponentFixture<RefundEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
