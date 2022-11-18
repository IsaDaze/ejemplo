import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Z0HomeComponent } from './z0-home.component';

describe('Z0HomeComponent', () => {
  let component: Z0HomeComponent;
  let fixture: ComponentFixture<Z0HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Z0HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Z0HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
