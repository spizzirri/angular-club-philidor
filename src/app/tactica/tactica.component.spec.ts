import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticaComponent } from './tactica.component';

describe('TacticaComponent', () => {
  let component: TacticaComponent;
  let fixture: ComponentFixture<TacticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
