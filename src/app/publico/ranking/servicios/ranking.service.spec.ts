import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RankingService } from './ranking.service';

describe('RankingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ],
    providers:[
      HttpClient
    ]
  }));

  it('should be created', () => {
    const service: RankingService = TestBed.get(RankingService);
    expect(service).toBeTruthy();
  });
});
