import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryUpdateComponent } from './entry-update.component';

describe('EntryUpdateComponent', () => {
  let component: EntryUpdateComponent;
  let fixture: ComponentFixture<EntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
