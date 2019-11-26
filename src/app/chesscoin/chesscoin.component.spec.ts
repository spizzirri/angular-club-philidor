import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChesscoinComponent } from './chesscoin.component';

describe('ChesscoinComponent', () => {
  let component: ChesscoinComponent;
  let fixture: ComponentFixture<ChesscoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChesscoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChesscoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
