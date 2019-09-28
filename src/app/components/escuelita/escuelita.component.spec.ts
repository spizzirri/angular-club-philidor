import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelitaComponent } from './escuelita.component';

describe('EscuelitaComponent', () => {
  let component: EscuelitaComponent;
  let fixture: ComponentFixture<EscuelitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscuelitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuelitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
