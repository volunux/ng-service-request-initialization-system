import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRequestUpdateComponent } from './account-request-update.component';

describe('AccountRequestUpdateComponent', () => {
  let component: AccountRequestUpdateComponent;
  let fixture: ComponentFixture<AccountRequestUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountRequestUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRequestUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
