import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports:[
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia mostrar misma cantidad de opciones en el menu que las que estan habilitadas en el archivo environment', ()=>{

    expect(component.toggles).toEqual(environment.vistas)

    const opcionesDelMenu:DebugElement[] = fixture.debugElement.queryAll(By.css('.navbar-nav li'))

    expect(Object.getOwnPropertyNames(component.toggles).length).toBe(opcionesDelMenu.length);
  })

});
