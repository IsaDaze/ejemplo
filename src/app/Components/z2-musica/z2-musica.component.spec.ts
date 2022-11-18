import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Z2MusicaComponent } from './z2-musica.component';

describe('Z2MusicaComponent', () => {
  let component: Z2MusicaComponent;
  let fixture: ComponentFixture<Z2MusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Z2MusicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Z2MusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
