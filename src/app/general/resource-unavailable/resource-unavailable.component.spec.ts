import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceUnavailableComponent } from './resource-unavailable.component';

describe('ResourceUnavailableComponent', () => {
  let component: ResourceUnavailableComponent;
  let fixture: ComponentFixture<ResourceUnavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceUnavailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
