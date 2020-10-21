import { TestBed } from '@angular/core/testing';

import { AdmincontrolService } from './admincontrol.service';

describe('AdmincontrolService', () => {
  let service: AdmincontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmincontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
