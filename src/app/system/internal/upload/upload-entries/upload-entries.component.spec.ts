import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEntriesComponent } from './upload-entries.component';

describe('UploadEntriesComponent', () => {
  let component: UploadEntriesComponent;
  let fixture: ComponentFixture<UploadEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
