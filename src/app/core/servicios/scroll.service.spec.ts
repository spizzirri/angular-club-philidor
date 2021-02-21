import { TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ScrollService } from './scroll.service';

describe('ScrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      RouterTestingModule.withRoutes([])
    ],
    providers:[]
  }));

  it('should be created', () => {
    const service: ScrollService = TestBed.get(ScrollService);
    expect(service).toBeTruthy();
  });
});
