import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1AboutComponent } from './z1-about.component';

describe('Z1AboutComponent', () => {
  let component: Z1AboutComponent;
  let fixture: ComponentFixture<Z1AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Z1AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Z1AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
