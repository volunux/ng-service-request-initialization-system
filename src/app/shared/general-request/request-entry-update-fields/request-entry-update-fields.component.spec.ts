import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryUpdateFieldsComponent } from './request-entry-update-fields.component';

describe('RequestEntryUpdateFieldsComponent', () => {
  let component: RequestEntryUpdateFieldsComponent;
  let fixture: ComponentFixture<RequestEntryUpdateFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryUpdateFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryUpdateFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
