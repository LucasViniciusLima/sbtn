import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaPersonaComponent } from './mapa-persona.component';

describe('MapaPersonaComponent', () => {
  let component: MapaPersonaComponent;
  let fixture: ComponentFixture<MapaPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
