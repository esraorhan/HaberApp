import { TestBed } from '@angular/core/testing';

import { HaberapiService } from './haberapi.service';

describe('HaberapiService', () => {
  let service: HaberapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaberapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
