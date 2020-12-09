import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRequestDetailComponent } from './account-request-detail.component';

describe('AccountRequestDetailComponent', () => {
  let component: AccountRequestDetailComponent;
  let fixture: ComponentFixture<AccountRequestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountRequestDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
