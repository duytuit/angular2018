import { TestBed } from '@angular/core/testing';

import { YeucauService } from './yeucau.service';

describe('YeucauService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YeucauService = TestBed.get(YeucauService);
    expect(service).toBeTruthy();
  });
});
