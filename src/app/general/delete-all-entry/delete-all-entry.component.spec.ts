import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllEntryComponent } from './delete-all-entry.component';

describe('DeleteAllEntryComponent', () => {
  let component: DeleteAllEntryComponent;
  let fixture: ComponentFixture<DeleteAllEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAllEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
