import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCredentialListComponent } from './request-credential-list.component';

describe('RequestCredentialListComponent', () => {
  let component: RequestCredentialListComponent;
  let fixture: ComponentFixture<RequestCredentialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCredentialListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCredentialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
