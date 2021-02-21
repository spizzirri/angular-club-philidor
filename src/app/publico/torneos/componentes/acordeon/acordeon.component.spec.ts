import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrarespaciosPipe } from 'src/app/shared/pipes/borrarespacios.pipe';

import { AcordeonComponent } from './acordeon.component';

describe('AcordionComponent', () => {
  let component: AcordeonComponent;
  let fixture: ComponentFixture<AcordeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcordeonComponent, BorrarespaciosPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
