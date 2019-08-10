import { TestBed } from '@angular/core/testing';

import { GiaoviecService } from './giaoviec.service';

describe('GiaoviecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiaoviecService = TestBed.get(GiaoviecService);
    expect(service).toBeTruthy();
  });
});
