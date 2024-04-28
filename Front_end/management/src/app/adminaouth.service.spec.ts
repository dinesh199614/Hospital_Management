import { TestBed } from '@angular/core/testing';

import { AdminaouthService } from './adminaouth.service';

describe('AdminaouthService', () => {
  let service: AdminaouthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminaouthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
