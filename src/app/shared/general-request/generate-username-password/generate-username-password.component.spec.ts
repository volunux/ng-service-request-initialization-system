import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateUsernamePasswordComponent } from './generate-username-password.component';

describe('GenerateUsernamePasswordComponent', () => {
  let component: GenerateUsernamePasswordComponent;
  let fixture: ComponentFixture<GenerateUsernamePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateUsernamePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateUsernamePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
