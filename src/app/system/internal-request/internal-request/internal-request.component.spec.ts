import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalRequestComponent } from './internal-request.component';

describe('InternalRequestComponent', () => {
  let component: InternalRequestComponent;
  let fixture: ComponentFixture<InternalRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
