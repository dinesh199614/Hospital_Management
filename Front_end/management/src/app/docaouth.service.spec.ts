import { TestBed } from '@angular/core/testing';

import { DocaouthService } from './docaouth.service';

describe('DocaouthService', () => {
  let service: DocaouthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocaouthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
