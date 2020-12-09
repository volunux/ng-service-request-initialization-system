import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalEntryCreateComponent } from './internal-entry-create.component';

describe('InternalEntryCreateComponent', () => {
  let component: InternalEntryCreateComponent;
  let fixture: ComponentFixture<InternalEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
