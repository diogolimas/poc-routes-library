import { TestBed } from '@angular/core/testing';

import { SecurityAppService } from './security-app.service';

describe('SecurityAppService', () => {
  let service: SecurityAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
