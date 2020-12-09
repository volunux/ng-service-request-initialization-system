import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSignaturePictureComponent } from './change-signature-picture.component';

describe('ChangeSignaturePictureComponent', () => {
  let component: ChangeSignaturePictureComponent;
  let fixture: ComponentFixture<ChangeSignaturePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSignaturePictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSignaturePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
