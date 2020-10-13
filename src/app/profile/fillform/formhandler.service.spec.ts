import { TestBed } from '@angular/core/testing';

import { FormhandlerService } from './formhandler.service';

describe('FormhandlerService', () => {
  let service: FormhandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormhandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
