import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntryOptionsComponent } from './list-entry-options.component';

describe('ListEntryOptionsComponent', () => {
  let component: ListEntryOptionsComponent;
  let fixture: ComponentFixture<ListEntryOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntryOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntryOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
