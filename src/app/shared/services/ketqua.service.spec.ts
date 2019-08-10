import { TestBed } from '@angular/core/testing';

import { KetquaService } from './ketqua.service';

describe('KetquaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KetquaService = TestBed.get(KetquaService);
    expect(service).toBeTruthy();
  });
});
