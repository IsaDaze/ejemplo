import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Z4PremiosComponent } from './z4-premios.component';

describe('Z4PremiosComponent', () => {
  let component: Z4PremiosComponent;
  let fixture: ComponentFixture<Z4PremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Z4PremiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Z4PremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
