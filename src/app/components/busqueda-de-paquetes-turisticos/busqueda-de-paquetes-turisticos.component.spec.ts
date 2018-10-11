import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaDePaquetesTuristicosComponent } from './busqueda-de-paquetes-turisticos.component';

describe('BusquedaDePaquetesTuristicosComponent', () => {
  let component: BusquedaDePaquetesTuristicosComponent;
  let fixture: ComponentFixture<BusquedaDePaquetesTuristicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaDePaquetesTuristicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaDePaquetesTuristicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
