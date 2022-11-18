import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Z3CancionesComponent } from './z3-canciones.component';

describe('Z3CancionesComponent', () => {
  let component: Z3CancionesComponent;
  let fixture: ComponentFixture<Z3CancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Z3CancionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Z3CancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
