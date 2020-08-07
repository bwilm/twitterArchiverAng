import { TestBed } from '@angular/core/testing';

import { GetcovidstatsService } from './getcovidstats.service';

describe('GetcovidstatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetcovidstatsService = TestBed.get(GetcovidstatsService);
    expect(service).toBeTruthy();
  });
});
