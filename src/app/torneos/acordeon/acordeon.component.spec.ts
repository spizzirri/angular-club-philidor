import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeonComponent } from './acordeon.component';

describe('AcordionComponent', () => {
  let component: AcordeonComponent;
  let fixture: ComponentFixture<AcordeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcordeonComponent ]
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
