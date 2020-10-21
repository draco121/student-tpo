import { TestBed } from '@angular/core/testing';

import { MainformGuard } from './mainform.guard';

describe('MainformGuard', () => {
  let guard: MainformGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MainformGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
