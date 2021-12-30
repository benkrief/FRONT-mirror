import { TestBed } from '@angular/core/testing';

import { GeodecodingService } from './geodecoding.service';

describe('GeodecodingService', () => {
  let service: GeodecodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeodecodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
