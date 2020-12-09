import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryCreateComponent } from './request-entry-create.component';

describe('RequestEntryCreateComponent', () => {
  let component: RequestEntryCreateComponent;
  let fixture: ComponentFixture<RequestEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
