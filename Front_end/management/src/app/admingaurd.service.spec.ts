import { TestBed } from '@angular/core/testing';

import { AdmingaurdService } from './admingaurd.service';

describe('AdmingaurdService', () => {
  let service: AdmingaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmingaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
