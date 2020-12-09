import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryTransferComponent } from './entry-transfer.component';

describe('EntryTransferComponent', () => {
  let component: EntryTransferComponent;
  let fixture: ComponentFixture<EntryTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
