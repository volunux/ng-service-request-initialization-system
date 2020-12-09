import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDeactivateComponent } from './account-deactivate.component';

describe('AccountDeactivateComponent', () => {
  let component: AccountDeactivateComponent;
  let fixture: ComponentFixture<AccountDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDeactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
