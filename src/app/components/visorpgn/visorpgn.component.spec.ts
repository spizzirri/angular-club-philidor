import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorpgnComponent } from './visorpgn.component';

describe('VisorpgnComponent', () => {
  let component: VisorpgnComponent;
  let fixture: ComponentFixture<VisorpgnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisorpgnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorpgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
