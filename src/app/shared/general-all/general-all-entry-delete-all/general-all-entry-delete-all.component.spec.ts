import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAllEntryDeleteAllComponent } from './general-all-entry-delete-all.component';

describe('GeneralAllEntryDeleteAllComponent', () => {
  let component: GeneralAllEntryDeleteAllComponent;
  let fixture: ComponentFixture<GeneralAllEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralAllEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAllEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
