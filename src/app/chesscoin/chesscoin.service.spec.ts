import { TestBed } from '@angular/core/testing';

import { ChesscoinService } from './chesscoin.service';

describe('ChesscoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChesscoinService = TestBed.get(ChesscoinService);
    expect(service).toBeTruthy();
  });
});
