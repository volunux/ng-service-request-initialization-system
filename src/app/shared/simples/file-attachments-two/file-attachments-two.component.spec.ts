import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAttachmentsTwoComponent } from './file-attachments-two.component';

describe('FileAttachmentsTwoComponent', () => {
  let component: FileAttachmentsTwoComponent;
  let fixture: ComponentFixture<FileAttachmentsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileAttachmentsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAttachmentsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
