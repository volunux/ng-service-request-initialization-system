import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundEntriesComponent } from './refund-entries.component';

describe('RefundEntriesComponent', () => {
  let component: RefundEntriesComponent;
  let fixture: ComponentFixture<RefundEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
