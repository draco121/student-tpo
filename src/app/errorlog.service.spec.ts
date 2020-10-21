import { TestBed } from '@angular/core/testing';

import { ErrorlogService } from './errorlog.service';

describe('ErrorlogService', () => {
  let service: ErrorlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
