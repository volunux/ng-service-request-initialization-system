import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryTransferComponent } from './request-entry-transfer.component';

describe('RequestEntryTransferComponent', () => {
  let component: RequestEntryTransferComponent;
  let fixture: ComponentFixture<RequestEntryTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
