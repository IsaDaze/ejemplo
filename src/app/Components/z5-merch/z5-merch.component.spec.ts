import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Z5MerchComponent } from './z5-merch.component';

describe('Z5MerchComponent', () => {
  let component: Z5MerchComponent;
  let fixture: ComponentFixture<Z5MerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Z5MerchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Z5MerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
