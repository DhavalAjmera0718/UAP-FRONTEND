import { TestBed } from '@angular/core/testing';

import { UapService } from './uap.service';

describe('UapService', () => {
  let service: UapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
