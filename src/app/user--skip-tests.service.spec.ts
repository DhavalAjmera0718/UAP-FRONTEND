import { TestBed } from '@angular/core/testing';

import { UserSkipTestsService } from './user--skip-tests.service';

describe('UserSkipTestsService', () => {
  let service: UserSkipTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSkipTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
