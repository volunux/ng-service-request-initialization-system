import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalEntryDetailComponent } from './internal-entry-detail.component';

describe('InternalEntryDetailComponent', () => {
  let component: InternalEntryDetailComponent;
  let fixture: ComponentFixture<InternalEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
