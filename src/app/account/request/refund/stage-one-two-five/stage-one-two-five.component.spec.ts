import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageOneTwoFiveComponent } from './stage-one-two-five.component';

describe('StageOneTwoFiveComponent', () => {
  let component: StageOneTwoFiveComponent;
  let fixture: ComponentFixture<StageOneTwoFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageOneTwoFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageOneTwoFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
