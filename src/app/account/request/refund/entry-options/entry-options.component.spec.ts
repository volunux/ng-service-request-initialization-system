import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryOptionsComponent } from './entry-options.component';

describe('EntryOptionsComponent', () => {
  let component: EntryOptionsComponent;
  let fixture: ComponentFixture<EntryOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
