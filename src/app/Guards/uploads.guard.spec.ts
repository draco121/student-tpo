import { TestBed } from '@angular/core/testing';

import { UpdatesGuard } from './updates.guard';

describe('UploadsGuard', () => {
  let guard: UpdatesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdatesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
